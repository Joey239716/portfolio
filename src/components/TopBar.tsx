"use client";

import Image from "next/image";

const GITHUB_USERNAME = "Joey239716";

export default function TopBar() {
  return (
    <div className="hidden lg:flex fixed top-6 right-40 z-20 items-center gap-2">
<a
        href={`https://github.com/${GITHUB_USERNAME}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub profile"
        className="flex items-center gap-2 rounded-full border border-foreground/10 bg-background/80 px-3 py-1.5 backdrop-blur transition-colors hover:border-foreground/20 hover:bg-foreground/5"
      >
        <Image
          src={`https://avatars.githubusercontent.com/${GITHUB_USERNAME}`}
          alt={GITHUB_USERNAME}
          width={22}
          height={22}
          className="rounded-full"
        />
        <span className="text-xs font-medium text-foreground/60">GitHub</span>
        <svg width="10" height="10" viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-foreground/40">
          <path d="M2 8L8 2M8 2H3.5M8 2V6.5" />
        </svg>
      </a>
    </div>
  );
}
