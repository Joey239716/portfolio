"use client";

import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import { projects } from "@/lib/projects";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function Projects() {
  return (
    <div className="mx-auto w-full max-w-2xl px-6 py-20">
      <motion.h1
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="text-4xl font-bold tracking-tight"
      >
        Projects
      </motion.h1>

      <motion.div
        className="mt-10 flex flex-col gap-4"
        variants={container}
        initial="hidden"
        animate="show"
      >
        {projects.map((project) => (
          <motion.div key={project.slug} variants={item}>
            <Link href={`/projects/${project.slug}`}>
              <div className="group rounded-2xl border border-foreground/10 bg-foreground/[0.02] p-6 transition-all duration-200 hover:border-foreground/20 hover:bg-foreground/[0.05]">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <h2 className="font-semibold text-foreground group-hover:text-blue-500 transition-colors">
                      {project.title}
                    </h2>
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
      </motion.div>
    </div>
  );
}
