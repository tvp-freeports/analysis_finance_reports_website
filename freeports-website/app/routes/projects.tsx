import React from "react";
import type { Route } from "./+types/home";
import Page from "../components/page";
import {
  ProjectSection,
  type Project,
  CardState,
} from "../components/ProjectSection";

// ✅ 6 projects with last 3 reusing IDs of first 3
const PROJECTS: Project[] = [
  {
    id: "project-1a",
    title: "Project 1 — Reports on the Israeli Occupation",
    shortDescription: "Exploring reports and analyses on the occupation.",
    fullDescription:
      "In-depth documentation and critical analysis of the Israeli occupation, with primary research and verified data sources to inform global audiences.",
    textColor: "text-[var(--color-white)]",
  },
  {
    id: "project-2a",
    title: "Project 2 — Reports on Climate Destruction",
    shortDescription: "Tracking the global impact of climate degradation.",
    fullDescription:
      "Comprehensive studies on environmental damage, corporate accountability, and sustainable solutions across regions most affected by climate change.",
    textColor: "text-[var(--color-white)]",
  },
  {
    id: "project-3a",
    title: "Project 3 — Data on Financial Secrecy",
    shortDescription: "Investigating tax havens and global inequality.",
    fullDescription:
      "Our team analyzes leaked documents and economic indicators to uncover how offshore finance systems perpetuate inequality and corruption.",
    textColor: "text-[var(--color-white)]",
  },
  // Last 3 cards reuse the IDs of the first 3
  {
    id: "project-1a",
    title: "Project 4 — Cultural Heritage in Conflict Zones",
    shortDescription: "Preserving artifacts and cultural sites under threat.",
    fullDescription:
      "An initiative aimed at mapping and digitally preserving cultural heritage at risk in active conflict regions.",
    textColor: "text-[var(--color-white)]",
  },
  {
    id: "project-2a",
    title: "Project 5 — Global Migration Patterns",
    shortDescription: "Studying displacement and migration routes.",
    fullDescription:
      "Combining open-source mapping and refugee data to visualize global migration patterns and policy impacts.",
    textColor: "text-[var(--color-white)]",
  },
  {
    id: "project-3a",
    title: "Project 6 — The Future of Freeports",
    shortDescription: "Analyzing the role of freeports in global trade.",
    fullDescription:
      "Researching the rise of freeports and their impact on transparency, taxation, and cultural property trade.",
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
  { rel: "icon", href: "assets/logo/icon.svg" },
];

// Hook to manage the expand/collapse state of cards
function useCardStates(length: number) {
  const [states, setStates] = React.useState<CardState[]>(
    Array(length).fill(CardState.Default)
  );

  const toggleCard = (index: number) => {
    if (states[index] === CardState.Expanded) {
      setStates(Array(length).fill(CardState.Default));
    } else {
      setStates(states.map((_, i) =>
        i === index ? CardState.Expanded : CardState.Collapsed
      ));
    }
  };

  return { states, toggleCard };
}

export default function Projects() {
  const { states, toggleCard } = useCardStates(PROJECTS.length);

  return (
    <Page>
      <section className="col-span-full col-start-1 w-full max-w-4xl mx-auto mb-8 mt-12">
        <h1 className="text-xl font-bold mb-3">Projects Under Development</h1>
        <p className="mt-2 text-gray-700 text-justify sm:text-center text-base leading-relaxed">
          Here you can explore the projects we are working on. Click a project to expand its description.
        </p>
      </section>

      <div className="col-span-full col-start-1 w-full flex flex-col items-center space-y-6 pb-12">
        {PROJECTS.map((project, i) => (
          <ProjectSection
            key={`${project.id}-${i}`} // still unique because we append index
            project={project}
            state={states[i]}
            onClick={() => toggleCard(i)}
          />
        ))}
      </div>
    </Page>
  );
}







