import React from "react";
import type { Route } from "./+types/home";
import Page from "../components/page";
import { ProjectsCard, CardState } from "../components/ui/ProjectsCard";
import type { CardInfo } from "../components/ui/Card";

const PROJECTS: CardInfo[] = [
  {
    id: "project-1a",
    title: "Project 1",
    shortDescription: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod.",
    fullDescription: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.",
  },
  {
    id: "project-2a",
    title: "Project 2",
    shortDescription: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod.",
    fullDescription: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.",  },
  {
    id: "project-3a",
    title: "Project 3",
    shortDescription: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod.",
    fullDescription: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.",  },
  {
    id: "project-1a",
    title: "Project 4",
    shortDescription: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod.",
    fullDescription: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.",  },
  {
    id: "project-2a",
    title: "Project 5",
    shortDescription: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod.",
    fullDescription: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.",
  },
  {
    id: "project-3a",
    title: "Project 6s",
    shortDescription: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod.",
    fullDescription:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.",
  },
];

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Freeports projects" },
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
        <h1 className="text-xl font-bold mb-3">Projects</h1>
        <p className="mt-2 text-gray-700 text-justify sm:text-center text-base leading-relaxed">
          Page under development.
        </p>
      </section>

      <div className="col-span-full col-start-1 w-full flex flex-col items-center space-y-6 pb-12">
        {PROJECTS.map((project, i) => (
          <ProjectsCard
            key={`${project.id}-${i}`} // still unique because we append index
            card={project}
            state={states[i]}
            onClick={() => toggleCard(i)}
          />
        ))}
      </div>
    </Page>
  );
}







