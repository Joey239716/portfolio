"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform, type Variants } from "framer-motion";
import { projects } from "@/lib/projects";
import { Playfair_Display } from "next/font/google";
import { SiReact, SiTypescript, SiNextdotjs, SiPython, SiGo, SiCplusplus, SiPostgresql, SiRedis, SiFlask, SiVercel, SiWebassembly, SiCmake, SiTailwindcss, SiFramer, SiDocker, SiSupabase, SiCloudflare, SiPytest, SiSelenium, SiFastapi, SiMongodb, SiJavascript } from "react-icons/si";
import { FaJava } from "react-icons/fa";
import type { IconType } from "react-icons";

function AwsIcon({ size, style }: { size?: number; style?: React.CSSProperties }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" style={style}>
      <path d="M6.763 10.036c0 .296.032.535.088.71.064.176.144.368.256.576.04.063.056.127.056.183 0 .08-.048.16-.152.24l-.503.335a.383.383 0 0 1-.208.072c-.08 0-.16-.04-.239-.112a2.47 2.47 0 0 1-.287-.375 6.18 6.18 0 0 1-.248-.471c-.622.734-1.405 1.101-2.347 1.101-.67 0-1.205-.191-1.596-.574-.391-.384-.59-.894-.59-1.533 0-.678.239-1.23.726-1.644.487-.415 1.133-.623 1.955-.623.272 0 .551.024.846.064.296.04.6.104.918.176v-.583c0-.607-.127-1.03-.375-1.277-.255-.248-.686-.367-1.3-.367-.28 0-.568.031-.863.103-.295.072-.583.16-.862.272a2.287 2.287 0 0 1-.28.104.488.488 0 0 1-.127.023c-.112 0-.168-.08-.168-.247v-.391c0-.128.016-.224.056-.28a.597.597 0 0 1 .224-.167c.279-.144.614-.264 1.005-.36a4.84 4.84 0 0 1 1.246-.151c.95 0 1.644.216 2.091.647.439.43.662 1.085.662 1.963v2.586zm-3.24 1.214c.263 0 .534-.048.822-.144.287-.096.543-.271.758-.51.128-.152.224-.32.272-.512.047-.191.08-.423.08-.694v-.335a6.66 6.66 0 0 0-.735-.136 6.02 6.02 0 0 0-.75-.048c-.535 0-.926.104-1.19.32-.263.215-.39.518-.39.917 0 .375.095.655.295.846.191.2.47.296.838.296zm6.41.862c-.144 0-.24-.024-.304-.08-.064-.048-.12-.16-.168-.311L7.586 5.55a1.398 1.398 0 0 1-.072-.32c0-.128.064-.2.191-.2h.783c.151 0 .255.025.31.08.065.048.113.16.16.312l1.342 5.284 1.245-5.284c.04-.16.088-.264.151-.312a.513.513 0 0 1 .32-.08h.638c.152 0 .256.025.32.08.063.048.12.16.151.312l1.261 5.348 1.381-5.348c.048-.16.104-.264.16-.312a.52.52 0 0 1 .311-.08h.743c.127 0 .2.065.2.2 0 .04-.009.08-.017.127a1.137 1.137 0 0 1-.056.2l-1.923 6.17c-.048.16-.104.263-.168.311a.51.51 0 0 1-.303.08h-.687c-.151 0-.255-.024-.32-.08-.063-.056-.119-.16-.15-.32l-1.238-5.148-1.23 5.14c-.04.16-.087.264-.15.32-.065.056-.177.08-.32.08zm10.256.215c-.415 0-.83-.048-1.229-.143-.399-.096-.71-.2-.918-.32-.128-.071-.215-.151-.247-.223a.563.563 0 0 1-.048-.224v-.407c0-.167.064-.247.183-.247.048 0 .096.008.144.024.048.016.12.048.2.08.271.12.566.215.878.279.319.064.63.096.95.096.502 0 .894-.088 1.165-.264a.86.86 0 0 0 .406-.758.777.777 0 0 0-.215-.559c-.144-.151-.416-.287-.807-.415l-1.157-.36c-.583-.183-1.014-.454-1.277-.813a1.902 1.902 0 0 1-.4-1.158c0-.335.073-.63.216-.886.144-.255.335-.479.575-.654.24-.184.51-.32.83-.415.32-.096.655-.136 1.006-.136.175 0 .359.008.535.032.183.024.35.056.518.088.16.04.312.08.455.127.144.048.256.096.336.144a.69.69 0 0 1 .24.2.43.43 0 0 1 .071.263v.375c0 .168-.064.256-.184.256a.83.83 0 0 1-.303-.096 3.652 3.652 0 0 0-1.532-.311c-.455 0-.815.071-1.062.223-.248.152-.375.383-.375.71 0 .224.08.416.24.567.158.152.454.304.877.44l1.134.358c.574.184.99.44 1.237.767.247.327.367.702.367 1.117 0 .343-.072.655-.207.926-.144.272-.336.511-.583.703-.248.2-.543.343-.886.447-.36.111-.735.167-1.141.167zM21.357 16.247c-2.652 1.96-6.51 3.003-9.821 3.003-4.647 0-8.83-1.717-11.993-4.573-.247-.223-.024-.527.272-.352 3.416 1.988 7.633 3.179 11.993 3.179 2.94 0 6.179-.607 9.157-1.876.447-.192.822.296.392.619zm1.006-1.149c-.336-.432-2.22-.207-3.073-.103-.255.032-.295-.192-.064-.36 1.502-1.06 3.972-.75 4.258-.4.287.357-.08 2.826-1.485 4.007-.215.184-.423.088-.327-.151.32-.79 1.03-2.57.69-2.993z"/>
    </svg>
  );
}

const techIcons: Record<string, IconType> = {
  "React": SiReact,
  "TypeScript": SiTypescript,
  "Next.js": SiNextdotjs,
  "Python": SiPython,
  "Go": SiGo,
  "C++": SiCplusplus,
  "PostgreSQL": SiPostgresql,
  "Redis": SiRedis,
  "Flask": SiFlask,
  "Vercel": SiVercel,
  "WebAssembly": SiWebassembly,
  "CMake": SiCmake,
  "Tailwind CSS": SiTailwindcss,
  "Framer Motion": SiFramer,
  "Docker": SiDocker,
  "Supabase": SiSupabase,
  "Cloudflare": SiCloudflare,
  "Pytest": SiPytest,
  "Selenium": SiSelenium,
  "FastAPI": SiFastapi,
  "MongoDB": SiMongodb,
  "Java": FaJava,
  "JavaScript": SiJavascript,
  "AWS": AwsIcon as IconType,
};

const techColors: Record<string, string> = {
  "React": "#61DAFB",
  "TypeScript": "#3178C6",
  "Next.js": "#ffffff",
  "Python": "#3776AB",
  "Go": "#00ADD8",
  "C++": "#00599C",
  "PostgreSQL": "#4169E1",
  "Redis": "#FF4438",
  "Flask": "#ffffff",
  "Vercel": "#ffffff",
  "WebAssembly": "#654FF0",
  "CMake": "#064F8C",
  "Tailwind CSS": "#06B6D4",
  "Framer Motion": "#0055FF",
  "Docker": "#2496ED",
  "Supabase": "#3ECF8E",
  "Cloudflare": "#F38020",
  "Pytest": "#0A9EDC",
  "Selenium": "#43B02A",
  "FastAPI": "#009688",
  "MongoDB": "#47A248",
  "Java": "#ED8B00",
  "JavaScript": "#F7DF1E",
  "AWS": "#FF9900",
};

const cursive = Playfair_Display({ subsets: ["latin"], weight: "700", style: "italic" });


const phrases = [
  "solving hard problems.",
  "climbing rocks.",
  "building for the web.",
  "when the tests finally pass.",
  "making computers do the hard work.",
  "3am debugging sessions.",
  "making other peoples lives easier.",
  "automating things that don't need to be done manually.",
  "working with claude code.",
];

function useTypewriter(speed = 55, deleteSpeed = 30, pause = 1800) {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = phrases[index];
    const done = !deleting && text === current;
    const empty = deleting && text === "";
    const delay = done ? pause : empty ? 80 : deleting ? deleteSpeed : speed;

    const t = setTimeout(() => {
      if (done) setDeleting(true);
      else if (empty) { setDeleting(false); setIndex((i) => (i + 1) % phrases.length); }
      else setText(deleting ? current.slice(0, text.length - 1) : current.slice(0, text.length + 1));
    }, delay);

    return () => clearTimeout(t);
  }, [text, deleting, index, speed, deleteSpeed, pause]);

  return text;
}

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const stagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const letterContainer: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07, delayChildren: 0.15 } },
};

const letterVariant: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 380, damping: 18 },
  },
};


function SectionHeader({ children }: { children: React.ReactNode }) {
  return (
    <motion.h2 variants={fadeUp} className="text-2xl font-bold tracking-tight">
      {children}
    </motion.h2>
  );
}

export default function Home() {
  const [resumeOpen, setResumeOpen] = useState(false);
  const typed = useTypewriter();
  const rawAngle = useMotionValue(90);
  const angle = useSpring(rawAngle, { stiffness: 60, damping: 20 });
  const gradient = useTransform(angle, (a) => `linear-gradient(${a}deg, #B2EF91, #FA9372)`);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      const cx = window.innerWidth / 2;
      const cy = window.innerHeight / 2;
      const rad = Math.atan2(e.clientY - cy, e.clientX - cx);
      rawAngle.set(rad * (180 / Math.PI) + 90);
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [rawAngle]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setResumeOpen(false); };
    const onOpen = () => setResumeOpen(true);
    window.addEventListener("keydown", onKey);
    window.addEventListener("open-resume", onOpen);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("open-resume", onOpen);
    };
  }, []);

  return (
    <div className="relative">

      {/* Background glow */}
      <motion.div
        className="pointer-events-none absolute top-0 left-0 right-0 h-screen -z-10"
        style={{
          background:
            "radial-gradient(ellipse 80% 55% at 50% -5%, rgba(178,239,145,0.08) 0%, rgba(250,147,114,0.04) 45%, transparent 70%)",
        }}
        animate={{ opacity: 1 }}
        initial={{ opacity: 0.5 }}
        transition={{ duration: 5, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" }}
      />

      {/* Grain overlay */}
      <div
        className="pointer-events-none absolute top-0 left-0 right-0 h-screen -z-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          opacity: 0.12,
          mixBlendMode: "overlay",
        }}
      />

      {/* Hero */}
      <section id="hero" className="flex flex-col min-h-screen py-20 mx-auto w-full max-w-2xl px-6">
        <motion.div className="flex flex-1 items-center" initial="hidden" animate="show" variants={stagger}>
          <div>
            <motion.h1 variants={fadeUp} className="text-5xl font-bold tracking-tight sm:text-6xl">
              Hi, my name is{" "}
              <motion.span
                variants={letterContainer}
                className={`${cursive.className} text-6xl sm:text-7xl bg-clip-text text-transparent inline-flex pb-3 pr-2`}
                style={{ backgroundImage: gradient }}
              >
                {["J", "o", "e", "y"].map((letter, i) => (
                  <motion.span key={i} variants={letterVariant} style={{ display: "inline-block" }}>
                    {letter}
                  </motion.span>
                ))}
              </motion.span>
            </motion.h1>

            <motion.p variants={fadeUp} className="mt-4 text-lg text-foreground/60 min-h-7">
              I like {typed}<span className="border-r-2 border-foreground/40 ml-0.5 animate-pulse">&nbsp;</span>
            </motion.p>

            <motion.div variants={fadeUp} className="mt-6 flex flex-wrap items-center gap-2">
              <button
                onClick={() => setResumeOpen(true)}
                className="inline-flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-xs font-medium text-[#111] hover:opacity-90 transition-opacity duration-200"
                style={{ background: "linear-gradient(135deg, #B2EF91, #FA9372)" }}
              >
                <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                  <polyline points="14,2 14,8 20,8" />
                  <line x1="16" y1="13" x2="8" y2="13" />
                  <line x1="16" y1="17" x2="8" y2="17" />
                </svg>
                Resume
              </button>
              <a
                href="https://www.linkedin.com/in/joey-l-242047241/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full border border-foreground/15 px-3.5 py-1.5 text-xs text-foreground/50 hover:border-foreground/30 hover:text-foreground/80 transition-colors duration-200"
              >
                <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                LinkedIn
              </a>
            </motion.div>
          </div>
        </motion.div>

        <motion.a
          href="#about"
          className="flex flex-col items-center gap-2 pb-4 w-fit mx-auto text-foreground/30 hover:text-foreground/60 transition-colors duration-200"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.0, duration: 0.6 }}
        >
          <span className="text-xs tracking-widest uppercase">Get to know me</span>
          <motion.span
            className="text-base"
            animate={{ y: [0, 5, 0] }}
            transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
          >
            ↓
          </motion.span>
        </motion.a>
      </section>

      {/* About */}
      <section id="about" className="w-full section-blend py-24">
        <div className="mx-auto w-full max-w-5xl px-6">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
          >
            {/* Section label */}
            <motion.div variants={fadeUp} className="flex items-center gap-4 mb-10">
              <span className="text-xs font-medium uppercase tracking-widest text-foreground/40">About</span>
              <div className="flex-1 h-px bg-foreground/10" />
            </motion.div>

            {/* Intro: avatar+stats left, bio+stack right */}
            <motion.div variants={fadeUp} className="grid grid-cols-1 md:grid-cols-[auto_1fr] gap-8 items-start">
              {/* Left: avatar */}
              <div className="flex justify-center md:justify-start">
                <div className="p-0.5 rounded-3xl shrink-0" style={{ background: "linear-gradient(135deg, #B2EF91, #FA9372)" }}>
                  <div className="relative w-56 h-72 rounded-[22px] overflow-hidden">
                    <Image src="/avatar.jpg" alt="Joey" fill sizes="224px" className="object-cover" />
                  </div>
                </div>
              </div>

              {/* Right: bio + stack */}
              <div className="flex flex-col gap-6">
                <p className="text-foreground/60 leading-relaxed">
                  I&apos;m a Computer Science student at Queen&apos;s University who loves building things that actually ship. I&apos;ve interned at CIBC and CanDeal writing Python, Go, and C++, mostly automating things that shouldn&apos;t need a human, and making systems faster or cheaper than they were before. Outside of code, you&apos;ll find me on a climbing wall!
                </p>
                <div className="flex flex-col gap-4">
                  {([
                    { label: "Languages", items: ["Python", "C++", "Go", "Java", "JavaScript", "TypeScript"] },
                    { label: "Technologies", items: ["React", "Next.js", "FastAPI", "Flask", "Docker", "PostgreSQL", "MongoDB", "AWS", "Pytest", "Selenium", "Tailwind CSS"] },
                  ] as { label: string; items: string[] }[]).map(({ label, items }) => (
                    <div key={label}>
                      <p className="text-xs text-foreground/40 uppercase tracking-widest mb-3">{label}</p>
                      <div className="flex flex-wrap gap-2">
                        {items.map((tech) => {
                          const Icon = techIcons[tech];
                          return (
                            <span
                              key={tech}
                              className="inline-flex items-center gap-1.5 rounded-full border border-foreground/10 px-3 py-1.5 text-xs text-foreground/60 hover:border-foreground/20 hover:text-foreground/80 transition-colors duration-200"
                            >
                              {Icon && <Icon size={11} style={{ color: techColors[tech] }} />}
                              {tech}
                            </span>
                          );
                        })}
                      </div>
                    </div>
                  ))}
                </div>

              </div>
            </motion.div>

            {/* Timeline */}
            <motion.div variants={fadeUp} className="mt-14">
              <div className="flex items-center gap-4 mb-6">
                <span className="text-xs font-medium uppercase tracking-widest text-foreground/40">Timeline</span>
                <div className="flex-1 h-px bg-foreground/10" />
              </div>

              <motion.div variants={stagger} className="flex flex-col gap-3">
                {/* CIBC */}
                <motion.div variants={fadeUp} className="rounded-2xl border border-foreground/10 bg-foreground/2 hover:border-foreground/20 hover:bg-foreground/5 transition-all duration-200 p-5">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white p-1.5 shadow-sm">
                        <Image src="/logos/cibc.png" alt="CIBC" width={32} height={32} className="object-contain" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-foreground">Canadian Imperial Bank of Commerce</p>
                        <p className="text-xs text-foreground/50 mt-0.5">Data Analyst Intern / Software Developer Intern · Toronto, ON</p>
                      </div>
                    </div>
                    <span className="text-xs text-foreground/35 shrink-0 tabular-nums mt-0.5">Sep – Dec 2025</span>
                  </div>
                  <ul className="mt-3 flex flex-col gap-1.5 pl-1 ml-13">
                    {[
                      <>Designed a <span className="text-foreground font-semibold">Python</span> application automating employee offboarding emails, reducing manual communication overhead by <span className="text-foreground font-semibold">85%</span>.</>,
                      <>Built an <span className="text-foreground font-semibold">anomaly detection engine</span> using deviation analysis across a <span className="text-foreground font-semibold">250k row CSV</span> database to identify behavioral outliers.</>,
                      <>Automated <span className="text-foreground font-semibold">ServiceNow</span> whitelisting ticket workflow using <span className="text-foreground font-semibold">Selenium</span> and <span className="text-foreground font-semibold">Python</span>, saving <span className="text-foreground font-semibold">260+ hours</span> of compliance review.</>,
                    ].map((bullet, i) => (
                      <li key={i} className="text-sm text-foreground/50 leading-relaxed flex gap-2">
                        <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-foreground/20" />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </motion.div>

                {/* CanDeal */}
                <motion.div variants={fadeUp} className="rounded-2xl border border-foreground/10 bg-foreground/2 hover:border-foreground/20 hover:bg-foreground/5 transition-all duration-200 p-5">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white p-1.5 shadow-sm">
                        <Image src="/logos/candeal.png" alt="CanDeal" width={32} height={32} className="object-contain" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-foreground">CanDeal</p>
                        <p className="text-xs text-foreground/50 mt-0.5">Software Developer Intern · Toronto, ON</p>
                      </div>
                    </div>
                    <span className="text-xs text-foreground/35 shrink-0 tabular-nums mt-0.5">May – Aug 2025</span>
                  </div>
                  <ul className="mt-3 flex flex-col gap-1.5 pl-1 ml-13">
                    {[
                      <>Developed a <span className="text-foreground font-semibold">Go</span> service consuming the <span className="text-foreground font-semibold">Slack REST API</span> to deliver server health alerts, enabling <span className="text-foreground font-semibold">24/7</span> on-call coverage.</>,
                      <>Connected a <span className="text-foreground font-semibold">Python</span> application to automate threat screening against <span className="text-foreground font-semibold">AWS</span> log data, saving <span className="text-foreground font-semibold">20+ hours</span> of monthly review.</>,
                      <>Streamlined environment setup by containerizing internal tools with <span className="text-foreground font-semibold">Docker</span>, standardizing deployments across the team.</>,
                      <>Offloaded <span className="text-foreground font-semibold">80%</span> of configuration reconciliation across distributed servers by developing an internal <span className="text-foreground font-semibold">Python</span> validation tool.</>,
                    ].map((bullet, i) => (
                      <li key={i} className="text-sm text-foreground/50 leading-relaxed flex gap-2">
                        <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-foreground/20" />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </motion.div>

                {/* Education */}
                <motion.div variants={fadeUp} className="rounded-2xl border border-foreground/10 bg-foreground/2 hover:border-foreground/20 hover:bg-foreground/5 transition-all duration-200 p-5">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white p-1.5 shadow-sm">
                        <Image src="/logos/QueensLogo_colour.png" alt="Queen's University" width={32} height={32} className="object-contain" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-foreground">Queen&apos;s University</p>
                        <p className="text-xs text-foreground/50 mt-0.5">Bachelor of Computer Science (Hons.)</p>
                      </div>
                    </div>
                    <span className="text-xs text-foreground/35 shrink-0 tabular-nums mt-0.5">2023 — 2027</span>
                  </div>
                  <div className="mt-3 ml-13 border-t border-foreground/10 pt-3">
                    <p className="text-xs text-foreground/40 uppercase tracking-widest mb-2">Coursework</p>
                    <div className="flex flex-wrap gap-1.5">
                      {["Data Structures & Algorithms", "Discrete Structures", "Computer Architecture", "Database Management Systems", "Statistics", "Operating Systems", "Software Architecture", "Algorithms"].map((course) => (
                        <span key={course} className="rounded-full border border-foreground/10 px-2.5 py-0.5 text-xs text-foreground/60 hover:border-foreground/20 transition-colors duration-200">
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>

              </motion.div>
            </motion.div>

          </motion.div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-24 mx-auto w-full max-w-5xl px-6">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={stagger}
        >
          <SectionHeader>Projects</SectionHeader>
          <div className="mt-8 flex flex-col gap-6">
            {projects.map((project) => (
              <motion.div key={project.slug} variants={fadeUp}>
                <Link href={`/projects/${project.slug}`}>
                  <div className="group rounded-2xl border border-foreground/10 bg-foreground/2 overflow-hidden transition-all duration-200 hover:border-foreground/20 hover:bg-foreground/5">
                    <div className="flex items-start justify-between gap-4 p-6">
                      <div className="flex-1">
                        <h3 className="font-semibold group-hover:text-blue-500 transition-colors">
                          {project.title}
                        </h3>
                        <p className="mt-1.5 text-sm text-foreground/60 leading-relaxed">
                          {project.description}
                        </p>
                        <div className="mt-4 flex flex-wrap gap-2">
                          {project.tags.map((tag) => {
                            const Icon = techIcons[tag];
                            return (
                              <span
                                key={tag}
                                className="inline-flex items-center gap-1 rounded-full border border-foreground/10 px-2.5 py-0.5 text-xs text-foreground/50"
                              >
                                {Icon && <Icon size={10} style={{ color: techColors[tag] }} />}
                                {tag}
                              </span>
                            );
                          })}
                        </div>
                      </div>
                      <span className="text-sm text-foreground/30 shrink-0">{project.year}</span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>


      {/* Contact */}
      <section id="contact" className="w-full section-blend py-24">
        <div className="mx-auto w-full max-w-5xl px-6">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
          >
            <SectionHeader>Contact</SectionHeader>
            <motion.p variants={fadeUp} className="mt-2 text-sm text-foreground/50">
              Open to opportunities, collaborations, or just a chat.
            </motion.p>

            <motion.div variants={stagger} className="mt-8 mx-auto max-w-2xl grid grid-cols-1 sm:grid-cols-3 gap-5">

              {/* Email — Gmail 4-color palette, lightened */}
              <motion.a variants={fadeUp} href="mailto:joey.liu2025@gmail.com"
                className="group rounded-2xl border border-foreground/10 bg-foreground/2 p-3 flex flex-col gap-3 hover:border-foreground/20 transition-all duration-200"
              >
                <div className="w-full aspect-square rounded-xl flex items-center justify-center"
                  style={{ background: "linear-gradient(135deg, #FCA5A5 0%, #FDE68A 33%, #93C5FD 66%, #86EFAC 100%)" }}>
                  <svg width="52" height="52" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" style={{ color: "rgba(255,255,255,0.9)" }}>
                    <rect width="20" height="16" x="2" y="4" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                </div>
                <div className="flex items-start justify-between px-1 pb-1">
                  <div>
                    <p className="text-sm font-semibold text-foreground">Email</p>
                    <p className="text-xs text-foreground/50 mt-0.5">joey.liu2025@gmail.com</p>
                  </div>
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="mt-1 shrink-0 text-foreground/30 group-hover:text-foreground/60 transition-colors duration-200">
                    <path d="M2 8L8 2M8 2H3.5M8 2V6.5" />
                  </svg>
                </div>
              </motion.a>

              {/* LinkedIn — LinkedIn blue → light periwinkle */}
              <motion.a variants={fadeUp} href="https://www.linkedin.com/in/joey-l-242047241/" target="_blank" rel="noopener noreferrer"
                className="group rounded-2xl border border-foreground/10 bg-foreground/2 p-3 flex flex-col gap-3 hover:border-foreground/20 transition-all duration-200"
              >
                <div className="w-full aspect-square rounded-xl flex items-center justify-center"
                  style={{ background: "linear-gradient(135deg, #3B82F6, #BFDBFE)" }}>
                  <svg width="52" height="52" viewBox="0 0 24 24" fill="currentColor" style={{ color: "rgba(255,255,255,0.9)" }}>
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </div>
                <div className="flex items-start justify-between px-1 pb-1">
                  <div>
                    <p className="text-sm font-semibold text-foreground">LinkedIn</p>
                    <p className="text-xs text-foreground/50 mt-0.5">joey-l-242047241</p>
                  </div>
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="mt-1 shrink-0 text-foreground/30 group-hover:text-foreground/60 transition-colors duration-200">
                    <path d="M2 8L8 2M8 2H3.5M8 2V6.5" />
                  </svg>
                </div>
              </motion.a>

              {/* GitHub — deep purple → soft lavender */}
              <motion.a variants={fadeUp} href="https://github.com/Joey239716" target="_blank" rel="noopener noreferrer"
                className="group rounded-2xl border border-foreground/10 bg-foreground/2 p-3 flex flex-col gap-3 hover:border-foreground/20 transition-all duration-200"
              >
                <div className="w-full aspect-square rounded-xl flex items-center justify-center"
                  style={{ background: "linear-gradient(135deg, #3B0764, #A78BFA)" }}>
                  <svg width="52" height="52" viewBox="0 0 24 24" fill="currentColor" style={{ color: "rgba(255,255,255,0.9)" }}>
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </div>
                <div className="flex items-start justify-between px-1 pb-1">
                  <div>
                    <p className="text-sm font-semibold text-foreground">GitHub</p>
                    <p className="text-xs text-foreground/50 mt-0.5">Joey239716</p>
                  </div>
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="mt-1 shrink-0 text-foreground/30 group-hover:text-foreground/60 transition-colors duration-200">
                    <path d="M2 8L8 2M8 2H3.5M8 2V6.5" />
                  </svg>
                </div>
              </motion.a>


            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Resume modal */}
      <AnimatePresence>
        {resumeOpen && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {/* Backdrop */}
            <div
              className="absolute inset-0 bg-black/70 backdrop-blur-sm"
              onClick={() => setResumeOpen(false)}
            />

            {/* Panel */}
            <motion.div
              className="relative z-10 flex flex-col w-full max-w-4xl h-[90vh] rounded-2xl border border-foreground/10 bg-background shadow-2xl overflow-hidden"
              initial={{ scale: 0.96, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.96, opacity: 0 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
            >
              {/* Header */}
              <div className="flex items-center justify-between px-5 py-4 border-b border-foreground/10 shrink-0">
                <span className="text-sm font-medium text-foreground">Resume</span>
                <div className="flex items-center gap-2">
                  <a
                    href="/resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-full border border-foreground/15 px-3 py-1.5 text-xs text-foreground/50 hover:border-foreground/30 hover:text-foreground/80 transition-colors duration-200"
                  >
                    <svg width="11" height="11" viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M2 8L8 2M8 2H3.5M8 2V6.5" />
                    </svg>
                    Open
                  </a>
                  <a
                    href="/resume.pdf"
                    download
                    className="inline-flex items-center gap-1.5 rounded-full border border-foreground/15 px-3 py-1.5 text-xs text-foreground/50 hover:border-foreground/30 hover:text-foreground/80 transition-colors duration-200"
                  >
                    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                      <polyline points="7 10 12 15 17 10" />
                      <line x1="12" y1="15" x2="12" y2="3" />
                    </svg>
                    Download
                  </a>
                  <button
                    onClick={() => setResumeOpen(false)}
                    className="flex items-center justify-center w-7 h-7 rounded-full border border-foreground/15 text-foreground/40 hover:border-foreground/30 hover:text-foreground/80 transition-colors duration-200"
                  >
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* PDF */}
              <iframe
                src="/resume.pdf"
                className="flex-1 w-full"
                title="Resume"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
