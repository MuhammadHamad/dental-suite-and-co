import { hours, type DayKey } from "@/content/site";

const DAY_ORDER: DayKey[] = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];
const SHORT_TO_KEY: Record<string, DayKey> = {
  Sun: "sun",
  Mon: "mon",
  Tue: "tue",
  Wed: "wed",
  Thu: "thu",
  Fri: "fri",
  Sat: "sat",
};

export type OpenStatus = {
  open: boolean;
  today: DayKey;
  label: string;
};

function toMinutes(hhmm: string) {
  const [h, m] = hhmm.split(":").map(Number);
  return h * 60 + m;
}

export function formatTime(hhmm: string) {
  const [h, m] = hhmm.split(":").map(Number);
  const suffix = h >= 12 ? "pm" : "am";
  const h12 = h % 12 === 0 ? 12 : h % 12;
  return m === 0 ? `${h12} ${suffix}` : `${h12}:${String(m).padStart(2, "0")} ${suffix}`;
}

/** Clinic time is Pakistan Standard Time regardless of where the visitor is. */
export function clinicNow(date = new Date()) {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: "Asia/Karachi",
    weekday: "short",
    hour: "2-digit",
    minute: "2-digit",
    hourCycle: "h23",
  }).formatToParts(date);
  const get = (type: string) => parts.find((p) => p.type === type)?.value ?? "";
  return {
    day: SHORT_TO_KEY[get("weekday")] ?? "mon",
    minutes: (Number(get("hour")) % 24) * 60 + Number(get("minute")),
  };
}

export function getOpenStatus(date = new Date()): OpenStatus {
  const { day, minutes } = clinicNow(date);
  const today = hours.find((h) => h.day === day)!;

  if (today.open && today.close) {
    const open = toMinutes(today.open);
    const close = toMinutes(today.close);
    if (minutes >= open && minutes < close) {
      const left = close - minutes;
      return {
        open: true,
        today: day,
        label: left <= 60 ? `Open · closes at ${formatTime(today.close)}` : `Open now · until ${formatTime(today.close)}`,
      };
    }
    if (minutes < open) {
      return { open: false, today: day, label: `Closed · opens today at ${formatTime(today.open)}` };
    }
  }

  const start = DAY_ORDER.indexOf(day);
  for (let i = 1; i <= 7; i++) {
    const next = hours.find((h) => h.day === DAY_ORDER[(start + i) % 7])!;
    if (next.open) {
      const when = i === 1 ? "tomorrow" : next.label;
      return { open: false, today: day, label: `Closed · opens ${when} at ${formatTime(next.open)}` };
    }
  }
  return { open: false, today: day, label: "Closed" };
}
