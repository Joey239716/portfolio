export interface Project {
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  tags: string[];
  year: string;
  liveUrl?: string;
  githubUrl?: string;
}

export const projects: Project[] = [
  {
    slug: "portfolio",
    title: "Portfolio Website",
    description: "The site you're looking at — built with Next.js, Tailwind, and Framer Motion.",
    longDescription:
      "A personal portfolio built to showcase projects and skills. Features smooth animations, a custom font (Satoshi), dark mode support, and a fully static build deployable to Vercel.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    year: "2026",
    githubUrl: "https://github.com",
  },
  {
    slug: "project-two",
    title: "Project Two",
    description: "A short description of what this project does and why it matters.",
    longDescription:
      "Replace this with a detailed description of the project. Talk about the problem it solves, how you built it, what you learned, and what you're proud of.",
    tags: ["React", "Node.js", "PostgreSQL"],
    year: "2025",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
  },
  {
    slug: "project-three",
    title: "Project Three",
    description: "Another project that demonstrates a different set of skills.",
    longDescription:
      "Replace this with a detailed description of the project. Talk about the problem it solves, how you built it, what you learned, and what you're proud of.",
    tags: ["Python", "FastAPI", "React"],
    year: "2025",
    liveUrl: "https://example.com",
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
