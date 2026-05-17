"use client";

import { useState, useEffect } from "react";
const nav = [
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

const socials = [
  {
    href: "https://github.com/Joey239716",
    label: "GitHub",
    svg: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.335-1.755-1.335-1.755-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12z" />
      </svg>
    ),
  },
  {
    href: "https://www.linkedin.com/in/joey-l-242047241/",
    label: "LinkedIn",
    svg: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    href: "https://x.com",
    label: "X",
    svg: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.253 5.622 5.911-5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
];

function LiveClock() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const update = () =>
      setTime(
        new Date().toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
          timeZoneName: "short",
        })
      );
    update();
    const id = setInterval(update, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <span className="text-[11px] text-foreground/30 tabular-nums">{time}</span>
  );
}

export default function Sidebar() {
  const [active, setActive] = useState("");

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    nav.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActive(id);
        },
        { rootMargin: "-10% 0px -50% 0px", threshold: 0 }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <aside className="hidden lg:flex fixed top-0 left-0 h-screen w-64 flex-col pl-40 pr-2 pt-36 z-10">
      {/* Name */}
      <a
        href="#hero"
        onClick={() => setActive("")}
        className="text-sm font-semibold tracking-tight hover:text-blue-500 transition-colors"
      >
        Joey
      </a>

      {/* Divider */}
      <hr className="mt-4 border-foreground/10" />

      {/* Nav */}
      <nav className="mt-4 flex flex-col gap-3">
        {nav.map(({ id, label }) => (
          <a
            key={id}
            href={`#${id}`}
            onClick={() => setActive(id)}
            className={`flex items-center gap-2 text-sm transition-colors hover:text-foreground ${
              active === id ? "font-medium text-foreground" : "text-foreground/50"
            }`}
          >
            <span
              className={`h-1 w-1 rounded-full bg-foreground transition-opacity ${
                active === id ? "opacity-100" : "opacity-0"
              }`}
            />
            {label}
          </a>
        ))}
      </nav>

      {/* Bottom — clock + socials */}
      <div className="mt-auto pb-10 flex flex-col gap-3">
        <LiveClock />
        <div className="flex items-center gap-3">
          {socials.map(({ href, svg, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="text-foreground/30 hover:text-foreground transition-colors"
            >
              {svg}
            </a>
          ))}
        </div>
      </div>
    </aside>
  );
}
