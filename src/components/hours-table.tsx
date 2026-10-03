"use client";

import { useOpenStatus } from "@/components/open-status";
import { hours } from "@/content/site";
import { formatTime } from "@/lib/hours";

export function HoursTable({ tone = "dark" }: { tone?: "light" | "dark" }) {
  const status = useOpenStatus();
  const onDark = tone === "dark";
  return (
    <table className="w-full text-sm">
      <caption className="sr-only">Opening hours (Pakistan Standard Time)</caption>
      <tbody>
        {hours.map((h) => {
          const isToday = status?.today === h.day;
          return (
            <tr
              key={h.day}
              className={`border-b last:border-0 ${onDark ? "border-gold-300/10" : "border-ink-900/10"} ${
                isToday ? (onDark ? "text-gold-300" : "text-gold-700") : ""
              }`}
            >
              <th scope="row" className={`py-3 text-left font-semibold ${isToday ? "" : onDark ? "text-stone-300" : "text-ink-800"}`}>
                {h.label}
                {isToday && (
                  <span className="ml-2 rounded-full bg-current/10 px-2 py-0.5 text-[0.6rem] font-bold uppercase tracking-wider">
                    Today
                  </span>
                )}
              </th>
              <td className={`py-3 text-right tabular-nums ${isToday ? "font-bold" : onDark ? "text-stone-400" : "text-muted"}`}>
                {h.open && h.close ? `${formatTime(h.open)} – ${formatTime(h.close)}` : "Closed"}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
