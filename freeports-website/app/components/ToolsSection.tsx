import React from "react";
import type { Chapter } from "./ChapterItem";
import { ChapterItem } from "./ChapterItem";

export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription?: string;
  chapters?: Chapter[];
  href?: string;
  bgColor?: string;    // e.g. "bg-[#fc3284]"
  textColor?: string;  // e.g. "text-white"
}

interface ProjectSectionProps {
  project: Project;
}

export function ProjectSection({ project }: ProjectSectionProps) {
  const [open, setOpen] = React.useState(false);

  const bgClass = project.bgColor ?? "bg-white";
  const textClass = project.textColor ?? "text-black dark:text-white";

  const toggleOpen = () => setOpen((prev) => !prev);

  const heightClass = open ? "h-[480px]" : "h-[170px]";
  const radiusClass = open ? "rounded-none" : "rounded-4xl";

  // Extract hex color from bg-[#fc3284]
  const bgColorValue = project.bgColor?.match(/\[#([^\]]+)\]/)?.[1]
    ? `#${project.bgColor.match(/\[#([^\]]+)\]/)![1]}`
    : "#000"; // fallback to black if not found

  return (
    <section
      onClick={toggleOpen}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && toggleOpen()}
      aria-expanded={open}
      aria-controls={`project-${project.id}`}
      className={`cursor-pointer focus:outline-none select-none col-span-full col-start-1 w-full max-w-4xl mx-auto mb-8 p-6 shadow-sm transition-all duration-500 ease-in-out ${heightClass} ${radiusClass} ${bgClass} ${textClass}`}
      style={{ transitionProperty: "height, border-radius, background-color" }}
    >
      <div className="h-full flex flex-col overflow-hidden">
        {/* --- Title and short description (Header) --- */}
        <div className="flex-shrink-0">
          <div className="text-2xl font-bold">{project.title}</div>
          <div className="text-base mt-1 opacity-90">{project.shortDescription}</div>
          {project.href && (
            <div className="mt-2">
              <a
                href={project.href}
                onClick={(e) => e.stopPropagation()}
                className="text-sm underline"
              >
                Open project page
              </a>
            </div>
          )}
        </div>

        {/* --- Scrollable full description (Middle) --- */}
        {open && (
          <div className="flex-1 mt-4 overflow-y-auto pr-2">
            <p>{project.fullDescription ?? project.shortDescription}</p>
          </div>
        )}

        {/* --- Read more button (Footer) --- */}
        {open && project.chapters && project.chapters.length > 0 && (
          <div className="flex-shrink-0 mt-4 flex justify-center">
            <a
              href="#"
              onClick={(e) => e.stopPropagation()}
              style={{ color: bgColorValue }}
              className="bg-white rounded-full px-6 py-3 font-bold text-[24px] select-none inline-block"
            >
              Read more
            </a>
          </div>
        )}
      </div>
    </section>

  );
}






