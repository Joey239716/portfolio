"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/projects", label: "Projects" },
  { href: "/blog", label: "Blog" },
  { href: "/about", label: "About" },
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
      </nav>
    </header>
  );
}
