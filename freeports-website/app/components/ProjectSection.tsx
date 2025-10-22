import React from "react";
import { ReadmrButton } from "./readmrButton"; // adjust path if needed

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
}

const expandedBgColorMap: Record<string, string> = {
  "project-1a": "#fc3284",
  "project-2a": "#f9be2d",
  "project-3a": "#d422ff",
};

export function ProjectSection({ project }: ProjectSectionProps) {
  const [open, setOpen] = React.useState(false);

  const collapsedBgColor = "#030712";
  const expandedBgColor = expandedBgColorMap[project.id];
  const backgroundColor = open ? expandedBgColor : collapsedBgColor;

  const textClass = project.textColor ?? "text-white";

  const toggleOpen = () => setOpen((o) => !o);

  return (
    <section
      onClick={toggleOpen}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          toggleOpen();
        }
      }}
      role="button"
      tabIndex={0}
      aria-expanded={open}
      aria-controls={`project-${project.id}`}
      style={{
        backgroundColor,
        transition: "background-color 0.3s ease",
      }}
      className={`
        col-span-full col-start-1 w-full max-w-4xl mx-auto mb-8 
        p-6 shadow-sm rounded-none cursor-pointer
        ${textClass}
      `}
    >
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <div className="text-2xl font-bold mb-2">{project.title}</div>

          {/* Always visible short description */}
          <div className="text-base opacity-90 text-justify [text-justify:inter-word]">
            {project.shortDescription}
          </div>
        </div>

        {/* Optional external link */}
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
          open ? "max-h-[2000px]" : "max-h-0"
        }`}
        aria-hidden={!open}
      >
        <div className="relative flex flex-col justify-between h-full pr-2 pb-14">
          <p className="text-base text-justify [text-justify:inter-word]">
            {project.fullDescription ?? project.shortDescription}
          </p>

          {/* Read More button – absolutely placed bottom right */}
          <div className="absolute bottom-0 right-0">
            <ReadmrButton
              label="Read More"
              onClick={() => {}}
              className=""
              style={{
                color: expandedBgColor ?? "#000",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}




