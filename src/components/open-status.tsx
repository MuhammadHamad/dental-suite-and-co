"use client";

import { useSyncExternalStore } from "react";
import { hoursSummary } from "@/content/site";
import { getOpenStatus } from "@/lib/hours";

function subscribe(onChange: () => void) {
  const id = window.setInterval(onChange, 30_000);
  return () => window.clearInterval(id);
}

// Snapshot is a primitive so React can compare it between ticks.
function getSnapshot() {
  const s = getOpenStatus();
  return `${s.open ? "1" : "0"}|${s.today}|${s.label}`;
}

export function useOpenStatus() {
  const raw = useSyncExternalStore(subscribe, getSnapshot, () => null);
  if (!raw) return null;
  const [open, today, label] = raw.split("|");
  return { open: open === "1", today, label };
}

export function OpenStatus({ className = "" }: { className?: string }) {
  const status = useOpenStatus();
  return (
    <span className={`inline-flex items-center gap-2 ${className}`}>
      <span
        className={`status-dot ${status ? (status.open ? "text-open" : "text-closed") : "text-gold-400"}`}
        aria-hidden="true"
      />
      <span>{status ? status.label : hoursSummary}</span>
    </span>
  );
}
