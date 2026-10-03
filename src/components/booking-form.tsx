"use client";

import { useState, type FormEvent } from "react";
import { CheckIcon, PhoneIcon, WhatsAppIcon } from "@/components/icons";
import { clinic } from "@/content/site";
import { treatments } from "@/content/treatments";
import { telLink, whatsappLink } from "@/lib/links";

const times = ["Morning (10 am – 1 pm)", "Afternoon (1 pm – 5 pm)", "Evening (5 pm – 8 pm)", "Any time"];

const field =
  "mt-2 block w-full rounded-2xl border border-ink-900/15 bg-white px-4 py-3.5 text-[0.98rem] text-ink-900 placeholder:text-stone-500 transition-colors focus:border-gold-600 focus:outline-none focus:ring-4 focus:ring-gold-300/30";
const label = "text-sm font-bold text-ink-900";

function isSunday(value: string) {
  return value ? new Date(`${value}T12:00:00`).getDay() === 0 : false;
}

export function BookingForm({ defaultTreatment = "" }: { defaultTreatment?: string }) {
  const [sent, setSent] = useState(false);
  const [date, setDate] = useState("");

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const get = (k: string) => String(data.get(k) ?? "").trim();
    const when = get("date")
      ? new Date(`${get("date")}T12:00:00`).toLocaleDateString("en-GB", { weekday: "long", day: "numeric", month: "long" })
      : "";

    const lines = [
      "Hi! I'd like to book an appointment at The Dental Suite & Co.",
      "",
      `Name: ${get("name")}`,
      `Phone: ${get("phone")}`,
      `Treatment: ${get("treatment") || "General consultation"}`,
      when ? `Preferred day: ${when}` : "",
      get("time") ? `Preferred time: ${get("time")}` : "",
      get("message") ? `Note: ${get("message")}` : "",
    ].filter((l, i) => l || i === 1);

    window.open(whatsappLink(lines.join("\n")), "_blank", "noopener");
    setSent(true);
  }

  if (sent) {
    return (
      <div className="rounded-[2rem] border border-ink-900/10 bg-white p-8 text-center shadow-[0_30px_70px_-45px_rgba(16,15,12,0.5)] sm:p-12">
        <span className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-ink-900 text-gold-300">
          <CheckIcon size={30} />
        </span>
        <h3 className="mt-6 font-display text-3xl font-semibold text-ink-900">Almost done — just press send</h3>
        <p className="mx-auto mt-3 max-w-md leading-relaxed text-muted">
          Your request has opened in WhatsApp. Send the message and our team will confirm your appointment. If WhatsApp
          didn&apos;t open, call us instead.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <a href={telLink} className="btn btn-dark">
            <PhoneIcon size={18} />
            Call {clinic.phone.display}
          </a>
          <button type="button" onClick={() => setSent(false)} className="btn btn-ghost-dark">
            Edit my request
          </button>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className="rounded-[2rem] border border-ink-900/10 bg-white p-6 shadow-[0_30px_70px_-45px_rgba(16,15,12,0.5)] sm:p-10"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block">
          <span className={label}>Your name</span>
          <input name="name" required autoComplete="name" placeholder="e.g. Ayesha Khan" className={field} />
        </label>
        <label className="block">
          <span className={label}>Phone / WhatsApp</span>
          <input
            name="phone"
            required
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            placeholder="03xx xxxxxxx"
            pattern="[0-9+\s\-]{10,16}"
            title="Please enter a valid phone number"
            className={field}
          />
        </label>
        <label className="block sm:col-span-2">
          <span className={label}>Treatment</span>
          <select name="treatment" defaultValue={defaultTreatment} className={`${field} appearance-none`}>
            <option value="">Not sure — general consultation</option>
            {treatments.map((t) => (
              <option key={t.slug} value={t.name}>
                {t.name}
              </option>
            ))}
          </select>
        </label>
        <label className="block">
          <span className={label}>Preferred day</span>
          <input
            name="date"
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className={field}
            aria-describedby="date-hint"
          />
          <span id="date-hint" className={`mt-2 block text-xs ${isSunday(date) ? "font-semibold text-red-700" : "text-muted"}`}>
            {isSunday(date) ? "We're closed on Sundays — please choose another day." : "Monday to Saturday"}
          </span>
        </label>
        <label className="block">
          <span className={label}>Preferred time</span>
          <select name="time" defaultValue="" className={`${field} appearance-none`}>
            <option value="">No preference</option>
            {times.map((t) => (
              <option key={t}>{t}</option>
            ))}
          </select>
        </label>
        <label className="block sm:col-span-2">
          <span className={label}>
            Anything we should know? <span className="font-normal text-muted">(optional)</span>
          </span>
          <textarea
            name="message"
            rows={3}
            placeholder="e.g. Pain on the upper left side for two days"
            className={`${field} resize-y`}
          />
        </label>
      </div>
      <button type="submit" disabled={isSunday(date)} className="btn btn-gold mt-7 w-full disabled:cursor-not-allowed disabled:opacity-60">
        <WhatsAppIcon size={20} />
        Send request on WhatsApp
      </button>
      <p className="mt-4 text-center text-xs leading-relaxed text-muted">
        Your details go straight into a WhatsApp message to the clinic — nothing is stored on this website.
      </p>
    </form>
  );
}
