import React from "react";

enum CardState {
  Default,
  Expanded,
  Collapsed,
}

export interface ElementCollapsableListInfos {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription?: string;
  href?: string;
  bgColor?: string;
  textColor?: string;
}

interface ElementCollapsableListProps {
  infos: ElementCollapsableListInfos;
  state: CardState;
  onClick: () => void;
}


const hoverBgColorMap: Record<string, string> = {
  "tool-1": "hover:bg-pink-500",
  "tool-2": "hover:bg-yellow-500",
  "tool-3": "hover:bg-purple-500",
};

function ElementCollapsableList({
  infos,
  state,
  onClick,
}: ElementCollapsableListProps) {
  const backgroundClass = infos.bgColor ?? "bg-white dark:bg-gray-900";
  const textClass = infos.textColor ?? "text-black dark:text-white";
  const hoverBgClass = hoverBgColorMap[infos.id] ?? "hover:bg-gray-100";

  return (
    <section
      className={`col-span-full col-start-1 w-full max-w-4xl mx-auto mb-5
        ${backgroundClass} ${textClass} ${hoverBgClass}
        p-6 shadow-sm transition-all duration-300
        transform hover:scale-[1.02] transition-transform ease-in-out
      `}
      aria-expanded={state === CardState.Default}
      aria-controls={`infos-${infos.id}`}
    >
      <div className="flex flex-col">
        <div className="text-2xl font-bold">{infos.title}</div>
        <div className="text-base mt-1 opacity-90">{infos.shortDescription}</div>
      </div>

      <div
        id={`infos-${infos.id}`}
        className={`mt-4 overflow-hidden transition-[max-height] duration-300 ease-in-out max-h-[2000px]`}
        aria-hidden={false}
      >
        <div className="text-base mt-2">
          <p>{infos.fullDescription ?? infos.shortDescription}</p>
        </div>
      </div>
    </section>
  );
}

// Preserved logic — unused now
function onClickElement(states: CardState[], i_clicked: number): CardState[] {
  if (states[i_clicked] === CardState.Expanded) {
    return states.map(() => CardState.Default);
  }
  return states.map((_, i) =>
    i === i_clicked ? CardState.Expanded : CardState.Collapsed
  );
}

export function CollapsableList({
  elements,
}: {
  elements: ElementCollapsableListInfos[];
}) {
  return elements.map((ele) => (
    <ElementCollapsableList
      key={ele.id}
      infos={ele}
      state={CardState.Expanded}
      onClick={() => {}}
    />
  ));
}

