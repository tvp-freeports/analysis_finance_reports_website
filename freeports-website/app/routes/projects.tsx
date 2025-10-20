import type { Route } from "./+types/home";
import Page from "../components/page";
import { ProjectSection, type Project } from "../components/ProjectSection";

/** Example data with background colors */
const PROJECTS: Project[] = [
  {
    id: "occupation",
    title: "Project 1 — Reports on the Israeli Occupation",
    shortDescription:
      "texttexttextexttexttextexttexttextexttexttextexttexttextexttexttextexttexttextexttexttexttexttexttextexttexttextexttexttextexttexttextexttexttextexttexttextexttexttextexttexttexttexttexttextexttexttextexttexttextexttexttextexttexttextexttexttextexttexttextexttexttexttexttexttextexttexttextexttexttextexttexttextexttexttextexttexttextexttexttextexttexttext",
    fullDescription:
      "texttexttextexttexttextexttexttextexttexttextexttexttextexttexttextexttexttextexttexttexttexttexttextexttexttextexttexttextexttexttextexttexttextexttexttextexttexttextexttexttexttexttexttextexttexttextexttexttextexttexttextexttexttextexttexttextexttexttextexttexttexttexttexttextexttexttextexttexttextexttexttextexttexttextexttexttextexttexttextexttexttext",
    bgColor: "bg-[#fc3284]", // 🔴 soft red background
    textColor: "text-[var(--color-white)]",
    chapters: [
      {
        id: "it-banks",
        title: "Chapter 1: Italian financial institutions data",
        description:
          "texttexttextexttexttextexttexttextexttexttextexttexttextexttexttextexttexttextexttexttexttexttexttextexttexttextexttexttextexttexttextexttexttextexttexttextexttexttextexttexttexttexttexttextexttexttextexttexttextexttexttextexttexttextexttexttextexttexttextexttexttexttexttexttextexttexttextexttexttextexttexttextexttexttextexttexttextexttexttextexttexttext",
        href: "/projects/occupation/chapters/it-banks",
      },
      {
        id: "dk-banks",
        title: "Chapter 2: Danish financial institutions data",
        description:
          "texttexttextexttexttextexttexttextexttexttextexttexttextexttexttextexttexttextexttexttexttexttexttextexttexttextexttexttextexttexttextexttexttextexttexttextexttexttextexttexttexttexttexttextexttexttextexttexttextexttexttextexttexttextexttexttextexttexttextexttexttexttexttexttextexttexttextexttexttextexttexttextexttexttextexttexttextexttexttextexttexttext",
        href: "/projects/occupation/chapters/dk-banks",
      },
    ],
  },
  {
    id: "climate",
    title: "Project 2 — Reports on Climate Destruction",
    shortDescription:
      "texttexttextexttexttextexttexttextexttexttextexttexttextexttexttextexttexttextexttexttexttexttexttextexttexttextexttexttextexttexttextexttexttextexttexttextexttexttextexttexttexttexttexttextexttexttextexttexttextexttexttextexttexttextexttexttextexttexttextexttexttexttexttexttextexttexttextexttexttextexttexttextexttexttextexttexttextexttexttextexttexttext",
    fullDescription:
      "texttexttextexttexttextexttexttextexttexttextexttexttextexttexttextexttexttextexttexttexttexttexttextexttexttextexttexttextexttexttextexttexttextexttexttextexttexttextexttexttexttexttexttextexttexttextexttexttextexttexttextexttexttextexttexttextexttexttextexttexttexttexttexttextexttexttextexttexttextexttexttextexttexttextexttexttextexttexttextexttexttext",
    bgColor: "bg-[#f9be2d]", // 🟡 soft yellow background
    textColor: "text-[var(--color-white)]",
    chapters: [
      {
        id: "emissions",
        title: "Chapter 1: Carbon emissions data",
        description:
          "texttexttextexttexttextexttexttextexttexttextexttexttextexttexttextexttexttextexttexttexttexttexttextexttexttextexttexttextexttexttextexttexttextexttexttextexttexttextexttexttexttexttexttextexttexttextexttexttextexttexttextexttexttextexttexttextexttexttextexttexttexttexttexttextexttexttextexttexttextexttexttextexttexttextexttexttextexttexttextexttexttext",
        href: "/projects/climate/chapters/emissions",
      },
    ],
  },
  {
    id: "climate",
    title: "Project 2 — Reports on Climate Destruction",
    shortDescription:
      "texttexttextexttexttextexttexttextexttexttextexttexttextexttexttextexttexttextexttexttexttexttexttextexttexttextexttexttextexttexttextexttexttextexttexttextexttexttextexttexttexttexttexttextexttexttextexttexttextexttexttextexttexttextexttexttextexttexttextexttexttexttexttexttextexttexttextexttexttextexttexttextexttexttextexttexttextexttexttextexttexttext",
    fullDescription:
      "texttexttextexttexttextexttexttextexttexttextexttexttextexttexttextexttexttextexttexttexttexttexttextexttexttextexttexttextexttexttextexttexttextexttexttextexttexttextexttexttexttexttexttextexttexttextexttexttextexttexttextexttexttextexttexttextexttexttextexttexttexttexttexttextexttexttextexttexttextexttexttextexttexttextexttexttextexttexttextexttexttext",
    bgColor: "bg-[#d422ff]", // 🟣 soft purple background
    textColor: "text-[var(--color-white)]",
    chapters: [
      {
        id: "emissions",
        title: "Chapter 1: Carbon emissions data",
        description:
          "texttexttextexttexttextexttexttextexttexttextexttexttextexttexttextexttexttextexttexttexttexttexttextexttexttextexttexttextexttexttextexttexttextexttexttextexttexttextexttexttexttexttexttextexttexttextexttexttextexttexttextexttexttextexttexttextexttexttextexttexttexttexttexttextexttexttextexttexttextexttexttextexttexttextexttexttextexttexttextexttexttext",
        href: "/projects/climate/chapters/emissions",
      },
    ],
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
      {/* Intro block: force it to occupy full grid and center the content */}
      <section
        className="col-span-full col-start-1 w-full max-w-4xl mx-auto mb-8"
        /* col-span-full / col-start-1 override the global section grid placement */
      > 
        <h1 className="text-3xl font-bold mb-3">Projects page (under development)</h1>
        <p className="mt-2 text-gray-700 text-justify sm:text-center">
          Here you can explore the projects we are working on. Click a project
          to expand its description; then show chapters to explore the work
          breakdown. Each chapter can link to a full page.
        </p>
      </section>

      {/* Projects list: same override so project cards appear centered under the intro */}
      <div className="col-span-full col-start-1 w-full flex flex-col items-center space-y-6 pb-12">
        {PROJECTS.map((p) => (
          <ProjectSection key={p.id} project={p} />
        ))}
      </div>
    </Page>
  );
}
