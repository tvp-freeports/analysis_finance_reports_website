import React from "react";

enum CardState {
  Default,
  Expanded,
  Collapsed
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
  onClick: () => void;  // or (event: React.MouseEvent) => void
}

function ElementCollapsableList({
    infos,
    state,
    onClick
}: ElementCollapsableListProps) {
    const backgroundClass = infos.bgColor ?? "bg-white dark:bg-gray-900";
    const textClass = infos.textColor ?? "text-black dark:text-white";
    return (
    <section
      className={`col-span-full col-start-1 w-full max-w-4xl mx-auto mb-8 
        ${backgroundClass} ${textClass} 
        ${state == CardState.Default ? "rounded-none" : "rounded-3xl"} 
        p-6 shadow-sm transition-all duration-300 cursor-pointer`}
      onClick={onClick}
      aria-expanded={state == CardState.Default}
      aria-controls={`infos-${infos.id}`}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onClick();
        }
      }}
    >
      <div className="flex flex-col">
        <div className="text-2xl font-bold">{infos.title}</div>
        <div className="text-base mt-1 opacity-90">{infos.shortDescription}</div>
      </div>

      <div
        id={`infos-${infos.id}`}
        className={`mt-4 overflow-hidden transition-[max-height] duration-300 ease-in-out ${
          state == CardState.Default ? "max-h-[2000px]" : "max-h-0"
        }`}
        aria-hidden={!open}
      >
        <div className="text-base mt-2">
          <p>{infos.fullDescription ?? infos.shortDescription}</p>
        </div>
      </div>
    </section>
    ); 
}

function onClickElement(states: CardState[], i_clicked: int) {
    if (states[i_clicked] == CardState.Expanded) {
        return states.map((e) => {
            return CardState.Default
        })
    }
    return states.map((e,i) => {
        return (i == i_clicked) ? CardState.Expanded : CardState.Collapsed;
    })
}

export function CollapsableList({ elements }: { elements: ElementCollapsableListInfos[]}) {
  const [list_state, setListState] = React.useState(
      Array(elements.length).fill(CardState.Default)
  );
  return (
    elements.map((ele,i) => {
      return <ElementCollapsableList infos={ele} state={list_state[i]} onClick={()=>{
        setListState(
            onClickElement(list_state,i)
        );
      }} key={i} />
    })
  );
}
