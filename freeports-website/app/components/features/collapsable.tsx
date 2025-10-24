import React, { useState } from "react";
import { Link } from "react-router-dom";

export enum CardState {
  Default,
  Expanded,
  Collapsed,
}

export interface ElementCollapsableListInfos {
  id: string;
  title: string;
  fullDescription?: string;
  href?: string;
  bgColor?: string;
  textColor?: string;
  buttonText?: string; // Actual button text per card
}

interface ElementCollapsableListProps {
  infos: ElementCollapsableListInfos;
  state: CardState;
  onClick: () => void;
}

const hoverBgColorMap: Record<string, string> = {
  "tool-1": "hover:bg-pink-600",
  "tool-2": "hover:bg-yellow-600",
  "tool-3": "hover:bg-purple-600",
};

function CardContent({ infos }: { infos: ElementCollapsableListInfos }) {
  return (
    <div className="flex flex-col">
      <div className="text-2xl font-bold">{infos.title}</div>
      <div className="mt-4 text-base">
        <p>{infos.fullDescription ?? ""}</p>
      </div>
    </div>
  );
}

function ElementCollapsableList({
  infos,
  state,
  onClick,
}: ElementCollapsableListProps) {
  const [isOpen, setIsOpen] = useState(state === CardState.Expanded);

  const toggle = () => setIsOpen((prev) => !prev);

  const backgroundClass = infos.bgColor ?? "bg-white dark:bg-gray-900";
  const textClass = infos.textColor ?? "text-black dark:text-white";
  const hoverBgClass = hoverBgColorMap[infos.id] ?? "hover:bg-gray-200";

  const baseClasses = `
    col-span-full col-start-1 w-full max-w-4xl mx-auto mb-5
    ${backgroundClass} ${textClass} ${hoverBgClass}
    p-6 shadow-sm transition-all duration-300
    transform hover:scale-[1.02] transition-transform ease-in-out
  `;

  const buttonLabel = infos.buttonText ?? "Read more";

  const content = (
    <div className="flex flex-col justify-between h-full">
      <CardContent infos={infos} />
      <div className="mt-4 flex justify-end">
        <button
          onClick={(e) => {
            e.preventDefault();
            toggle();
          }}
          className={`${backgroundClass} ${textClass} px-4 py-2 rounded-md font-semibold shadow hover:brightness-90 transition`}
        >
          {buttonLabel}
        </button>
      </div>
    </div>
  );

  if (infos.href) {
    return (
      <Link to={infos.href} className={baseClasses}>
        {content}
      </Link>
    );
  }

  return (
    <section
      className={baseClasses}
      aria-expanded={isOpen}
      aria-controls={`infos-${infos.id}`}
      onClick={onClick}
    >
      {content}
    </section>
  );
}

export function CollapsableList({
  elements,
}: {
  elements: ElementCollapsableListInfos[];
}) {
  return (
    <>
      {elements.map((ele) => (
        <ElementCollapsableList
          key={ele.id}
          infos={ele}
          state={CardState.Expanded}
          onClick={() => {}}
        />
      ))}
    </>
  );
}

// Example usage with three cards having unique button text
export const exampleElements: ElementCollapsableListInfos[] = [
  {
    id: "tool-1",
    title: "Tool One",
    fullDescription: "This is tool one description.",
    bgColor: "bg-pink-500",
    textColor: "text-white",
    buttonText: "Read more1",
  },
  {
    id: "tool-2",
    title: "Tool Two",
    fullDescription: "This is tool two description.",
    bgColor: "bg-yellow-500",
    textColor: "text-black",
    buttonText: "Read moreU",
  },
  {
    id: "tool-3",
    title: "Tool Three",
    fullDescription: "This is tool three description.",
    bgColor: "bg-purple-500",
    textColor: "text-white",
    buttonText: "Read more@",
  },
];



