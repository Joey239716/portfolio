"use client";

import { motion, type Variants } from "framer-motion";
import Link from "next/link";
import {
  SiReact, SiTypescript, SiNextdotjs, SiPython, SiGo, SiCplusplus,
  SiPostgresql, SiRedis, SiFlask, SiVercel, SiWebassembly, SiCmake,
  SiTailwindcss, SiFramer, SiDocker, SiSupabase, SiCloudflare,
  SiMongodb, SiFirebase,
} from "react-icons/si";
import type { IconType } from "react-icons";
import type { Project } from "@/lib/projects";

function AwsIcon({ size, style }: { size?: number; style?: React.CSSProperties }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" style={style}>
      <path d="M6.763 10.036c0 .296.032.535.088.71.064.176.144.368.256.576.04.063.056.127.056.183 0 .08-.048.16-.152.24l-.503.335a.383.383 0 0 1-.208.072c-.08 0-.16-.04-.239-.112a2.47 2.47 0 0 1-.287-.375 6.18 6.18 0 0 1-.248-.471c-.622.734-1.405 1.101-2.347 1.101-.67 0-1.205-.191-1.596-.574-.391-.384-.59-.894-.59-1.533 0-.678.239-1.23.726-1.644.487-.415 1.133-.623 1.955-.623.272 0 .551.024.846.064.296.04.6.104.918.176v-.583c0-.607-.127-1.03-.375-1.277-.255-.248-.686-.367-1.3-.367-.28 0-.568.031-.863.103-.295.072-.583.16-.862.272a2.287 2.287 0 0 1-.28.104.488.488 0 0 1-.127.023c-.112 0-.168-.08-.168-.247v-.391c0-.128.016-.224.056-.28a.597.597 0 0 1 .224-.167c.279-.144.614-.264 1.005-.36a4.84 4.84 0 0 1 1.246-.151c.95 0 1.644.216 2.091.647.439.43.662 1.085.662 1.963v2.586zm-3.24 1.214c.263 0 .534-.048.822-.144.287-.096.543-.271.758-.51.128-.152.224-.32.272-.512.047-.191.08-.423.08-.694v-.335a6.66 6.66 0 0 0-.735-.136 6.02 6.02 0 0 0-.75-.048c-.535 0-.926.104-1.19.32-.263.215-.39.518-.39.917 0 .375.095.655.295.846.191.2.47.296.838.296zm6.41.862c-.144 0-.24-.024-.304-.08-.064-.048-.12-.16-.168-.311L7.586 5.55a1.398 1.398 0 0 1-.072-.32c0-.128.064-.2.191-.2h.783c.151 0 .255.025.31.08.065.048.113.16.16.312l1.342 5.284 1.245-5.284c.04-.16.088-.264.151-.312a.513.513 0 0 1 .32-.08h.638c.152 0 .256.025.32.08.063.048.12.16.151.312l1.261 5.348 1.381-5.348c.048-.16.104-.264.16-.312a.52.52 0 0 1 .311-.08h.743c.127 0 .2.065.2.2 0 .04-.009.08-.017.127a1.137 1.137 0 0 1-.056.2l-1.923 6.17c-.048.16-.104.263-.168.311a.51.51 0 0 1-.303.08h-.687c-.151 0-.255-.024-.32-.08-.063-.056-.119-.16-.15-.32l-1.238-5.148-1.23 5.14c-.04.16-.087.264-.15.32-.065.056-.177.08-.32.08zm10.256.215c-.415 0-.83-.048-1.229-.143-.399-.096-.71-.2-.918-.32-.128-.071-.215-.151-.247-.223a.563.563 0 0 1-.048-.224v-.407c0-.167.064-.247.183-.247.048 0 .096.008.144.024.048.016.12.048.2.08.271.12.566.215.878.279.319.064.63.096.95.096.502 0 .894-.088 1.165-.264a.86.86 0 0 0 .406-.758.777.777 0 0 0-.215-.559c-.144-.151-.416-.287-.807-.415l-1.157-.36c-.583-.183-1.014-.454-1.277-.813a1.902 1.902 0 0 1-.4-1.158c0-.335.073-.63.216-.886.144-.255.335-.479.575-.654.24-.184.51-.32.83-.415.32-.096.655-.136 1.006-.136.175 0 .359.008.535.032.183.024.35.056.518.088.16.04.312.08.455.127.144.048.256.096.336.144a.69.69 0 0 1 .24.2.43.43 0 0 1 .071.263v.375c0 .168-.064.256-.184.256a.83.83 0 0 1-.303-.096 3.652 3.652 0 0 0-1.532-.311c-.455 0-.815.071-1.062.223-.248.152-.375.383-.375.71 0 .224.08.416.24.567.158.152.454.304.877.44l1.134.358c.574.184.99.44 1.237.767.247.327.367.702.367 1.117 0 .343-.072.655-.207.926-.144.272-.336.511-.583.703-.248.2-.543.343-.886.447-.36.111-.735.167-1.141.167zM21.357 16.247c-2.652 1.96-6.51 3.003-9.821 3.003-4.647 0-8.83-1.717-11.993-4.573-.247-.223-.024-.527.272-.352 3.416 1.988 7.633 3.179 11.993 3.179 2.94 0 6.179-.607 9.157-1.876.447-.192.822.296.392.619zm1.006-1.149c-.336-.432-2.22-.207-3.073-.103-.255.032-.295-.192-.064-.36 1.502-1.06 3.972-.75 4.258-.4.287.357-.08 2.826-1.485 4.007-.215.184-.423.088-.327-.151.32-.79 1.03-2.57.69-2.993z" />
    </svg>
  );
}

const techIcons: Record<string, IconType> = {
  "React": SiReact, "React 18": SiReact, "React 19": SiReact,
  "TypeScript": SiTypescript, "TypeScript 5": SiTypescript,
  "Next.js": SiNextdotjs, "Next.js 16": SiNextdotjs,
  "Python": SiPython, "Python 3.11": SiPython,
  "Go": SiGo, "Go 1.21+": SiGo,
  "C++": SiCplusplus, "C++17": SiCplusplus,
  "PostgreSQL": SiPostgresql,
  "Redis": SiRedis,
  "Flask": SiFlask,
  "Vercel": SiVercel,
  "WebAssembly": SiWebassembly,
  "CMake": SiCmake, "CMake 3.20+": SiCmake,
  "Tailwind CSS": SiTailwindcss, "Tailwind CSS 3": SiTailwindcss, "Tailwind CSS 4": SiTailwindcss,
  "Framer Motion": SiFramer, "Framer Motion 11": SiFramer,
  "Docker": SiDocker,
  "Supabase": SiSupabase,
  "Cloudflare": SiCloudflare, "Cloudflare Workers": SiCloudflare,
  "MongoDB": SiMongodb, "MongoDB Atlas": SiMongodb,
  "Firebase": SiFirebase, "Firebase Authentication": SiFirebase,
  "AWS": AwsIcon as IconType,
};

const techColors: Record<string, string> = {
  "React": "#61DAFB", "React 18": "#61DAFB", "React 19": "#61DAFB",
  "TypeScript": "#3178C6", "TypeScript 5": "#3178C6",
  "Next.js": "#ffffff", "Next.js 16": "#ffffff",
  "Python": "#3776AB", "Python 3.11": "#3776AB",
  "Go": "#00ADD8", "Go 1.21+": "#00ADD8",
  "C++": "#00599C", "C++17": "#00599C",
  "PostgreSQL": "#4169E1",
  "Redis": "#FF4438",
  "Flask": "#ffffff",
  "Vercel": "#ffffff",
  "WebAssembly": "#654FF0",
  "CMake": "#064F8C", "CMake 3.20+": "#064F8C",
  "Tailwind CSS": "#06B6D4", "Tailwind CSS 3": "#06B6D4", "Tailwind CSS 4": "#06B6D4",
  "Framer Motion": "#0055FF", "Framer Motion 11": "#0055FF",
  "Docker": "#2496ED",
  "Supabase": "#3ECF8E",
  "Cloudflare": "#F38020", "Cloudflare Workers": "#F38020",
  "MongoDB": "#47A248", "MongoDB Atlas": "#47A248",
  "Firebase": "#FFCA28", "Firebase Authentication": "#FFCA28",
  "AWS": "#FF9900",
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const stagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-4 mb-6">
      <span className="text-xs font-medium uppercase tracking-widest text-foreground/40">{children}</span>
      <div className="flex-1 h-px bg-foreground/10" />
    </div>
  );
}

function TechBadge({ item }: { item: string }) {
  const Icon = techIcons[item];
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-foreground/10 px-2.5 py-1 text-xs text-foreground/60 hover:border-foreground/20 hover:text-foreground/80 transition-colors duration-200">
      {Icon && <Icon size={10} style={{ color: techColors[item] }} />}
      {item}
    </span>
  );
}

export function ProjectContent({ project }: { project: Project }) {
  return (
    <motion.main
      className="mx-auto w-full max-w-3xl px-6 py-20"
      initial="hidden"
      animate="show"
      variants={stagger}
    >
      {/* Back link */}
      <motion.div variants={fadeUp}>
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-sm text-foreground/40 hover:text-foreground/70 transition-colors duration-200"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M19 12H5M12 5l-7 7 7 7" />
          </svg>
          Back
        </Link>
      </motion.div>

      {/* Hero */}
      <motion.div variants={fadeUp} className="mt-10">
        <div className="flex items-center gap-3">
          <span className="text-xs font-medium uppercase tracking-widest text-foreground/35 tabular-nums">{project.year}</span>
          {project.liveUrl && (
            <span className="inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-xs font-medium" style={{ background: "linear-gradient(135deg, rgba(178,239,145,0.15), rgba(250,147,114,0.15))", border: "1px solid rgba(178,239,145,0.2)" }}>
              <span className="h-1.5 w-1.5 rounded-full bg-green-400 animate-pulse" />
              Live
            </span>
          )}
        </div>

        <h1
          className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl bg-clip-text text-transparent pb-1"
          style={{ backgroundImage: "linear-gradient(135deg, #B2EF91, #FA9372)" }}
        >
          {project.title}
        </h1>

        <p className="mt-4 text-base text-foreground/60 leading-relaxed max-w-2xl">
          {project.description}
        </p>

        {/* CTA links */}
        <div className="mt-6 flex flex-wrap gap-3">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-medium text-[#111] hover:opacity-90 transition-opacity duration-200"
              style={{ background: "linear-gradient(135deg, #B2EF91, #FA9372)" }}
            >
              Live Site
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M2 8L8 2M8 2H3.5M8 2V6.5" />
              </svg>
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full border border-foreground/20 px-4 py-2 text-sm font-medium text-foreground/70 hover:border-foreground/30 hover:text-foreground/90 hover:bg-foreground/5 transition-all duration-200"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              GitHub
            </a>
          )}
        </div>

        {/* Tags */}
        <div className="mt-5 flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <TechBadge key={tag} item={tag} />
          ))}
        </div>
      </motion.div>

      <div className="mt-16 flex flex-col gap-14">

        {/* Overview */}
        <motion.section variants={fadeUp}>
          <SectionLabel>Overview</SectionLabel>
          <div className="flex flex-col gap-4">
            {project.overview.map((para, i) => (
              <p key={i} className="text-sm text-foreground/60 leading-relaxed">
                {para}
              </p>
            ))}
          </div>
        </motion.section>

        {/* Metrics */}
        {project.metrics && project.metrics.length > 0 && (
          <motion.section variants={fadeUp}>
            <SectionLabel>Key Metrics</SectionLabel>
            <div className={`grid gap-3 ${project.metrics.length <= 2 ? "grid-cols-2" : "grid-cols-2 sm:grid-cols-4"}`}>
              {project.metrics.map((m) => (
                <div
                  key={m.label}
                  className="rounded-2xl border border-foreground/10 bg-foreground/2 p-5 flex flex-col gap-1 hover:border-foreground/20 hover:bg-foreground/[0.04] transition-all duration-200"
                >
                  <span
                    className="text-2xl font-bold tracking-tight bg-clip-text text-transparent"
                    style={{ backgroundImage: "linear-gradient(135deg, #B2EF91, #FA9372)" }}
                  >
                    {m.value}
                  </span>
                  <span className="text-xs text-foreground/40 leading-snug">{m.label}</span>
                </div>
              ))}
            </div>
          </motion.section>
        )}

        {/* Problem */}
        {project.problem && (
          <motion.section variants={fadeUp}>
            <SectionLabel>The Problem</SectionLabel>
            <div className="rounded-2xl border border-foreground/10 bg-foreground/2 p-5">
              <p className="text-sm text-foreground/60 leading-relaxed">{project.problem}</p>
            </div>
          </motion.section>
        )}

        {/* Features */}
        {project.features.length > 0 && (
          <motion.section variants={fadeUp}>
            <SectionLabel>Features</SectionLabel>
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 gap-3"
              variants={stagger}
            >
              {project.features.map((feature, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  className="rounded-2xl border border-foreground/10 bg-foreground/2 p-5 hover:border-foreground/20 hover:bg-foreground/[0.04] transition-all duration-200"
                >
                  <div className="flex items-start gap-3">
                    <div
                      className="mt-0.5 h-5 w-5 shrink-0 rounded-md flex items-center justify-center"
                      style={{ background: "linear-gradient(135deg, rgba(178,239,145,0.2), rgba(250,147,114,0.2))" }}
                    >
                      <div className="h-1.5 w-1.5 rounded-full" style={{ background: "linear-gradient(135deg, #B2EF91, #FA9372)" }} />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-foreground">{feature.title}</p>
                      <p className="mt-1 text-xs text-foreground/50 leading-relaxed">{feature.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.section>
        )}

        {/* Architecture */}
        {project.architecture && (
          <motion.section variants={fadeUp}>
            <SectionLabel>Architecture</SectionLabel>
            <div className="rounded-2xl border border-foreground/10 bg-foreground/2 overflow-hidden">
              <div className="px-5 py-3 border-b border-foreground/10 flex items-center gap-2">
                <div className="h-2.5 w-2.5 rounded-full bg-foreground/15" />
                <div className="h-2.5 w-2.5 rounded-full bg-foreground/15" />
                <div className="h-2.5 w-2.5 rounded-full bg-foreground/15" />
                <span className="ml-2 text-xs text-foreground/30">System Design</span>
              </div>
              <div className="p-5">
                <p className="text-sm text-foreground/60 leading-relaxed font-mono">{project.architecture}</p>
              </div>
            </div>
          </motion.section>
        )}

        {/* Technical Highlights */}
        {project.highlights.length > 0 && (
          <motion.section variants={fadeUp}>
            <SectionLabel>Technical Highlights</SectionLabel>
            <motion.ul className="flex flex-col gap-3" variants={stagger}>
              {project.highlights.map((h, i) => (
                <motion.li
                  key={i}
                  variants={fadeUp}
                  className="flex items-start gap-3 rounded-xl border border-foreground/8 bg-foreground/[0.015] px-4 py-3 hover:border-foreground/15 hover:bg-foreground/[0.03] transition-all duration-200"
                >
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full flex-none" style={{ background: "linear-gradient(135deg, #B2EF91, #FA9372)" }} />
                  <span className="text-sm text-foreground/60 leading-relaxed">{h}</span>
                </motion.li>
              ))}
            </motion.ul>
          </motion.section>
        )}

        {/* Tech Stack */}
        {project.techStack.length > 0 && (
          <motion.section variants={fadeUp}>
            <SectionLabel>Tech Stack</SectionLabel>
            <div className="flex flex-col gap-4">
              {project.techStack.map((cat) => (
                <div key={cat.name} className="flex flex-col gap-2 sm:flex-row sm:items-start sm:gap-4">
                  <span className="text-xs text-foreground/35 uppercase tracking-widest shrink-0 w-28 pt-1">{cat.name}</span>
                  <div className="flex flex-wrap gap-1.5">
                    {cat.items.map((item) => (
                      <TechBadge key={item} item={item} />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.section>
        )}

        {/* Footer links */}
        <motion.div variants={fadeUp} className="pt-4 border-t border-foreground/10 flex items-center justify-between">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-sm text-foreground/40 hover:text-foreground/70 transition-colors duration-200"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 12H5M12 5l-7 7 7 7" />
            </svg>
            Back to portfolio
          </Link>
          <div className="flex gap-2">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-foreground/40 hover:text-foreground/70 transition-colors duration-200"
              >
                Live Site ↗
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-foreground/40 hover:text-foreground/70 transition-colors duration-200"
              >
                GitHub ↗
              </a>
            )}
          </div>
        </motion.div>

      </div>
    </motion.main>
  );
}
