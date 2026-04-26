"use client";

import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import { projects } from "@/lib/projects";
import { Playfair_Display } from "next/font/google";

const cursive = Playfair_Display({ subsets: ["latin"], weight: "700", style: "italic" });

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const stagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

function SectionHeader({ children }: { children: React.ReactNode }) {
  return (
    <motion.h2 variants={fadeUp} className="text-2xl font-bold tracking-tight">
      {children}
    </motion.h2>
  );
}

export default function Home() {
  return (
    <div>

      {/* Hero */}
      <section id="hero" className="flex min-h-screen items-center py-20 mx-auto w-full max-w-2xl px-6">
        <motion.div initial="hidden" animate="show" variants={stagger}>
          <motion.h1 variants={fadeUp} className="text-5xl font-bold tracking-tight sm:text-6xl">
            Hi, my name is{" "}
            <span
              className={`${cursive.className} text-6xl sm:text-7xl bg-clip-text text-transparent`}
              style={{ backgroundImage: "linear-gradient(90deg, #B2EF91, #FA9372)" }}
            >
              Joey
            </span>
          </motion.h1>
          <motion.p variants={fadeUp} className="mt-3 text-base text-foreground/40 uppercase tracking-widest">
            Student
          </motion.p>
          <motion.p variants={fadeUp} className="mt-4 text-lg text-foreground/60">
            I love building things for the web.
          </motion.p>
          <motion.div variants={fadeUp} className="mt-8 flex gap-4">
            <a
              href="#projects"
              className="rounded-full bg-blue-500 px-6 py-2.5 text-sm font-medium text-white transition-colors hover:bg-blue-600"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="rounded-full border border-foreground/20 px-6 py-2.5 text-sm font-medium transition-colors hover:bg-foreground/5"
            >
              Contact Me
            </a>
          </motion.div>
        </motion.div>
      </section>

      {/* About */}
      <section id="about" className="py-24 mx-auto w-full max-w-2xl px-6">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={stagger}
        >
          <SectionHeader>About</SectionHeader>
          <motion.p variants={fadeUp} className="mt-4 text-foreground/60 leading-relaxed max-w-lg">
            A short bio about yourself goes here. Talk about what you do, what you care about,
            and what you&apos;re working on.
          </motion.p>

          <motion.div variants={fadeUp} id="education" className="mt-12">
            <h3 className="text-sm font-medium uppercase tracking-widest text-foreground/40">
              Education
            </h3>
            <hr className="mt-2 mb-4 border-foreground/10" />
            <p className="text-foreground/50 text-sm">Add your education here.</p>
          </motion.div>

          <motion.div variants={fadeUp} id="experience" className="mt-10">
            <h3 className="text-sm font-medium uppercase tracking-widest text-foreground/40">
              Experience
            </h3>
            <hr className="mt-2 mb-4 border-foreground/10" />
            <p className="text-foreground/50 text-sm">Add your experience here.</p>
          </motion.div>
        </motion.div>
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
                    <div className="w-full aspect-video bg-foreground/5 flex items-center justify-center border-b border-foreground/10">
                      <span className="text-xs text-foreground/20 tracking-widest uppercase">
                        Project Screenshot
                      </span>
                    </div>
                    <div className="flex items-start justify-between gap-4 p-6">
                      <div className="flex-1">
                        <h3 className="font-semibold group-hover:text-blue-500 transition-colors">
                          {project.title}
                        </h3>
                        <p className="mt-1.5 text-sm text-foreground/60 leading-relaxed">
                          {project.description}
                        </p>
                        <div className="mt-4 flex flex-wrap gap-2">
                          {project.tags.map((tag) => (
                            <span
                              key={tag}
                              className="rounded-full border border-foreground/10 px-2.5 py-0.5 text-xs text-foreground/50"
                            >
                              {tag}
                            </span>
                          ))}
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
      <section id="contact" className="py-24 mx-auto w-full max-w-2xl px-6">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={stagger}
        >
          <SectionHeader>Contact</SectionHeader>
          <motion.p variants={fadeUp} className="mt-4 text-foreground/50">
            Contact form coming soon.
          </motion.p>
        </motion.div>
      </section>

    </div>
  );
}
