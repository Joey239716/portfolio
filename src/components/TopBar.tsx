import Image from "next/image";

const GITHUB_USERNAME = "Joey239716";

export default function TopBar() {
  return (
    <div className="fixed top-6 right-40 z-20 flex items-center gap-2">
      <a
        href="/resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-1.5 rounded-full border border-foreground/10 bg-background/80 px-3 py-1.5 backdrop-blur transition-colors hover:border-foreground/20 hover:bg-foreground/5"
      >
        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-foreground/50">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
          <polyline points="14,2 14,8 20,8" />
          <line x1="16" y1="13" x2="8" y2="13" />
          <line x1="16" y1="17" x2="8" y2="17" />
          <polyline points="10,9 9,9 8,9" />
        </svg>
        <span className="text-xs font-medium text-foreground/60">Resume</span>
      </a>

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
