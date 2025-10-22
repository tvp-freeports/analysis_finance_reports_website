// projects.tsx
import type { Route } from "./+types/home";
import Page from "../components/page";
import {
  ProjectSection,
  type Project,
  CardState,
} from "../components/ProjectSection";
import React from "react";

// Your existing project data
const PROJECTS: Project[] = [
  {
    id: "project-1a",
    title: "Project 1 — Reports on the Israeli Occupation",
    shortDescription: "Lorem ipsum dolor sit amet.",
  fullDescription: "Full: Lorem ipsum dolor sit amet. Full: Lorem ipsum dolor sit amet. Full: Lorem ipsum dolor sit amet Full: Lorem ipsum dolor sit amet. Full: Lorem ipsum dolor sit amet. Full: Lorem ipsum dolor sit amet Full: Lorem ipsum dolor sit amet. Full: Lorem ipsum dolor sit amet. Full: Lorem ipsum dolor sit amet Full: Lorem ipsum dolor sit amet. Full: Lorem ipsum dolor sit amet. Full: Lorem ipsum dolor sit amet. Full: Lorem ipsum dolor sit amet. Full: Lorem ipsum dolor sit amet. Full: Lorem ipsum dolor sit ametFull: Lorem ipsum dolor sit amet. Full: Lorem ipsum dolor sit amet. Full: Lorem ipsum dolor sit ametFull: Lorem ipsum dolor sit amet. Full: Lorem ipsum dolor sit amet. Full: Lorem ipsum dolor sit ametFull: Lorem ipsum dolor sit amet. Full: Lorem ipsum dolor sit amet. Full: Lorem",
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

// Custom hook managing card states with described toggle behavior
function useCardStates(length: number) {
  const [states, setStates] = React.useState<CardState[]>(
    Array(length).fill(CardState.Default)
  );

  const toggleCard = (index: number) => {
    if (states[index] === CardState.Expanded) {
      // Clicking an expanded card resets all cards to default
      setStates(Array(length).fill(CardState.Default));
    } else {
      // Clicking a default/collapsed card expands it and collapses others
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
      <section className="col-span-full col-start-1 w-full max-w-4xl mx-auto mb-8">
        <h1 className="text-3xl font-bold mb-3">Page under development</h1>
        <p className="mt-2 text-gray-700 text-justify sm:text-center">
          Here you can explore the projects we are working on. Click a project
          to expand its description.
        </p>
      </section>

      <div className="col-span-full col-start-1 w-full flex flex-col items-center space-y-6 pb-12">
        {PROJECTS.map((project, i) => (
          <ProjectSection
            key={`${project.id}-${i}`}
            project={project}
            state={states[i]}
            onClick={() => toggleCard(i)}
          />
        ))}
      </div>
    </Page>
  );
}




