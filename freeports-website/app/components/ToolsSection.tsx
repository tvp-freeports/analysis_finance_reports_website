import React from "react";

export interface Tool {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription?: string;
  href?: string;
  bgColor?: string;
  textColor?: string;
}

interface ToolsSectionProps {
  tool: Tool;
}

enum CardState {
  Default,
  Expanded,
  Collapsed
} 


export function ToolSection({ tool }: ToolsSectionProps) {
  const [open, setOpen] = React.useState(CardState.Default);

  const backgroundClass = tool.bgColor ?? "bg-white dark:bg-gray-900";
  const textClass = tool.textColor ?? "text-black dark:text-white";

  return (
    <section
      className={`col-span-full col-start-1 w-full max-w-4xl mx-auto mb-8 
        ${backgroundClass} ${textClass} 
        ${open ? "rounded-none" : "rounded-3xl"} 
        p-6 shadow-sm transition-all duration-300 cursor-pointer`}
      onClick={() => setOpen((o) => !o)}
      aria-expanded={open}
      aria-controls={`tool-${tool.id}`}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          setOpen((o) => !o);
        }
      }}
    >
      <div className="flex flex-col">
        <div className="text-2xl font-bold">{tool.title}</div>
        <div className="text-base mt-1 opacity-90">{tool.shortDescription}</div>
      </div>

      <div
        id={`tool-${tool.id}`}
        className={`mt-4 overflow-hidden transition-[max-height] duration-300 ease-in-out ${
          open ? "max-h-[2000px]" : "max-h-0"
        }`}
        aria-hidden={!open}
      >
        <div className="text-base mt-2">
          <p>{tool.fullDescription ?? tool.shortDescription}</p>
        </div>
      </div>
    </section>
  );
}
