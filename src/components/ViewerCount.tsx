"use client";

import { useEffect, useRef, useState } from "react";

function generateId() {
  return Math.random().toString(36).slice(2);
}

export default function ViewerCount() {
  const [count, setCount] = useState<number | null>(null);
  const idRef = useRef<string>("");

  useEffect(() => {
    idRef.current = generateId();
    const id = idRef.current;

    async function heartbeat() {
      try {
        const res = await fetch("/api/viewers", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ id }),
        });
        const data = await res.json();
        setCount(data.count);
      } catch {}
    }

    heartbeat();
    const interval = setInterval(heartbeat, 30_000);

    return () => {
      clearInterval(interval);
      navigator.sendBeacon(
        "/api/viewers",
        JSON.stringify({ id })
      );
    };
  }, []);

  if (count === null) return null;

  return (
    <div className="flex items-center gap-1.5 rounded-full border border-foreground/10 bg-background/80 px-3 py-1.5 backdrop-blur">
      <span className="relative flex h-1.5 w-1.5">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
        <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-green-400" />
      </span>
      <span className="text-xs text-foreground/50">
        {count} viewing
      </span>
    </div>
  );
}
