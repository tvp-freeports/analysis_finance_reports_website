// routes/projects.tsx or wherever this file lives
import type { Route } from "./+types/home";
import Page from "../components/page";
import { ProjectSection, type Project } from "../components/ProjectSection";

/** Example data with background colors */
const PROJECTS: Project[] = [
  {
    id: "project-1a",
    title: "Project 1 — Reports on the Israeli Occupation",
    shortDescription: "Lorem ipsum dolor sit amet.",
    fullDescription: "Full: Lorem ipsum dolor sit amet.",
    textColor: "text-[var(--color-white)]",
  },
  {
    id: "project-2a",
    title: "Project 2 — Reports on Climate Destruction",
    shortDescription: "Lorem ipsum dolor sit amet.",
    fullDescription: "Full: Lorem ipsum dolor sit amet.",
    textColor: "text-[var(--color-white)]",
  },
  {
    id: "project-3a",
    title: "Project 3 — Reports on Climate Destruction",
    shortDescription: "Lorem ipsum dolor sit amet.",
    fullDescription: "Full: Lorem ipsum dolor sit amet.",
    textColor: "text-[var(--color-white)]",
  },
  {
    id: "project-1a",
    title: "Project 4 — Reports on the Israeli Occupation",
    shortDescription: "Lorem ipsum dolor sit amet.",
    fullDescription: "Full: Lorem ipsum dolor sit amet.",
    textColor: "text-[var(--color-white)]",
  },
  {
    id: "project-2a",
    title: "Project 5 — Reports on Climate Destruction",
    shortDescription: "Lorem ipsum dolor sit amet.",
    fullDescription: "Full: Lorem ipsum dolor sit amet.",
    textColor: "text-[var(--color-white)]",
  },
  {
    id: "project-3a",
    title: "Project 6 — Reports on Climate Destruction",
    shortDescription: "Lorem ipsum dolor sit amet.",
    fullDescription: "Full: Lorem ipsum dolor sit amet.",
    textColor: "text-[var(--color-white)]",
  },
];

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Freeports — Projects" },
    {
      name: "description",
      content: "Overview of our projects and how to contribute.",
    },
  ];
}

export const links: Route.LinksFunction = () => [
  {
    rel: "icon",
    href: "assets/logo/icon.svg",
  },
];

export default function Projects() {
  return (
    <Page>
      <section className="col-span-full col-start-1 w-full max-w-4xl mx-auto mb-8">
        <h1 className="text-3xl font-bold mb-3">Page under development</h1>
        <p className="mt-2 text-gray-700 text-justify sm:text-center">
          Here you can explore the projects we are working on. Click a project
          to expand its description.
        </p>
      </section>

      <div className="col-span-full col-start-1 w-full flex flex-col items-center space-y-6 pb-12">
        {PROJECTS.map((p) => (
          <ProjectSection key={p.id} project={p} />
        ))}
      </div>
    </Page>
  );
}



