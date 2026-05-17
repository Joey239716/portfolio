"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/projects", label: "Projects" },
  { href: "/#about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function MobileNav() {
  const pathname = usePathname();

  return (
    <header className="lg:hidden sticky top-0 z-10 flex items-center justify-between border-b border-foreground/10 bg-background px-6 py-4">
      <Link href="/" className="text-sm font-semibold tracking-tight">
        Joey
      </Link>
      <nav className="flex items-center gap-4">
        {links.map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            className={`text-sm transition-colors hover:text-foreground ${
              pathname.startsWith(href)
                ? "font-medium text-foreground"
                : "text-foreground/50"
            }`}
          >
            {label}
          </Link>
        ))}
        <button
          onClick={() => window.dispatchEvent(new CustomEvent("open-resume"))}
          aria-label="Resume"
          className="flex items-center gap-1.5 text-foreground/50 hover:text-foreground transition-colors"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
            <polyline points="14,2 14,8 20,8" />
            <line x1="16" y1="13" x2="8" y2="13" />
            <line x1="16" y1="17" x2="8" y2="17" />
          </svg>
          <span className="text-sm">Resume</span>
        </button>
      </nav>
    </header>
  );
}
