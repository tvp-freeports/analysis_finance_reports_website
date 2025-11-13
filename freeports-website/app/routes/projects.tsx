import React from "react";
import type { Route } from "./+types/home";
import Page from "../components/page";
import { ProjectCard, CardState } from "../components/ui/ProjectCard";
import type { CardInfo } from "../components/ui/Card";

const PROJECTS: CardInfo[] = [
  {
    id: "project-1a",
    title: "Reports on the Israeli Occupation",
    fullDescription: `Freeports is currently collaborating with an Italian journal to
    reveal data on the exposure of hundreds of investment funds, owned by major Italian 
    banking groups, towards companies that have been identified as contributing to the Israeli
    occupation of Palestinian territories. 
    The next step is to scale the analysis to cover
    as many worldwide investment funds as possible.`,
    href: ""
  }
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
      <section className="col-start-2 col-span-3 mx-0 justify-self-start !mt-10 !mb-2">
        <h1>Projects</h1>
        <p>
        Following the list of projects we are focusing on.
        </p>
      </section>

      <div className="col-start-2 col-span-3 w-full flex flex-col items-center justify-self-start mx-0">
        {PROJECTS.map((project, i) => (
          <ProjectCard
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







