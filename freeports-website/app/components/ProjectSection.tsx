import React from "react";
import { Button } from "./Button";

export enum CardState {
  Default,
  Expanded,
  Collapsed,
}

export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription?: string;
  href?: string;
  bgColor?: string;
  textColor?: string;
}

interface ProjectSectionProps {
  project: Project;
  state: CardState;
  onClick: () => void;
}

const expandedBgColorMap: Record<string, string> = {
  "project-1a": "#fc3284",
  "project-2a": "#f9be2d",
  "project-3a": "#d422ff",
};

export function ProjectSection({
  project,
  state,
  onClick,
}: ProjectSectionProps) {
  const collapsedBgColor = "#030712";
  const expandedBgColor = expandedBgColorMap[project.id];
  const isExpanded = state === CardState.Expanded;

  const textClass = project.textColor ?? "text-white";

  return (
    <section
      onClick={onClick}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onClick();
        }
      }}
      role="button"
      tabIndex={0}
      aria-expanded={isExpanded}
      aria-controls={`project-${project.id}`}
      style={{
        backgroundColor: isExpanded ? expandedBgColor : collapsedBgColor,
        transition: "background-color 0.3s ease",
      }}
      className={`
        col-span-full col-start-1 w-full max-w-4xl mx-auto mb-6
        p-6 shadow-sm rounded-none cursor-pointer
        ${textClass}
      `}
      onMouseEnter={(e) => {
        if (!isExpanded && expandedBgColor) {
          (e.currentTarget as HTMLElement).style.backgroundColor = expandedBgColor;
        }
      }}
      onMouseLeave={(e) => {
        if (!isExpanded) {
          (e.currentTarget as HTMLElement).style.backgroundColor = collapsedBgColor;
        }
      }}
    >
      {/* Header */}
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <div className="text-2xl font-bold mb-2">{project.title}</div>
          <div className="text-base opacity-90 text-justify [text-justify:inter-word]">
            {project.shortDescription}
          </div>
        </div>

        {project.href && (
          <a
            href={project.href}
            className="text-sm underline ml-4 flex-shrink-0"
            onClick={(e) => e.stopPropagation()}
          >
            Open project page
          </a>
        )}
      </div>

      {/* Expandable content */}
      <div
        id={`project-${project.id}`}
        className={`mt-4 overflow-hidden transition-[max-height] duration-300 ease-in-out ${
          isExpanded ? "max-h-[2000px]" : "max-h-0"
        }`}
        aria-hidden={!isExpanded}
      >
        {/* flex-col with justify-between ensures button stays at bottom */}
        <div className="relative flex flex-col h-full justify-between pr-2 pb-4">
          <div>
            <p className="text-base text-justify [text-justify:inter-word]">
              {project.fullDescription ?? project.shortDescription}
            </p>
          </div>

          {/* ✅ Clickable button fixed at bottom of parent container */}
          <div className="flex justify-end mt-4">
            <a href="#" onClick={(e) => e.stopPropagation()}>
              <Button
                label="Read More"
                style={{
                  color: expandedBgColor ?? "#000", // text matches card bg
                }}
                className="bg-white px-6 py-3 rounded-full"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}





