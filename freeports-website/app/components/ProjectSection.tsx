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
  bgColor?: string;    // optional background color
  textColor?: string;  // optional text color (e.g. "text-white")
}

interface ProjectSectionProps {
  project: Project;
}

/**
 * Centered Project card with optional background & text colors,
 * and adjustable typography for title / description.
 */
export function ProjectSection({ project }: ProjectSectionProps) {
  const [open, setOpen] = React.useState(false);
  const [showChapters, setShowChapters] = React.useState(false);

  // Apply chosen background + text colors (fallback to neutral)
  const backgroundClass = project.bgColor ?? "bg-white dark:bg-gray-900";
  const textClass = project.textColor ?? "text-black dark:text-white";

  return (
    <section
      className={`col-span-full col-start-1 w-full max-w-4xl mx-auto mb-8 border rounded-2xl p-6 shadow-sm transition-all duration-300 ${backgroundClass} ${textClass}`}
    >
      {/* --- Header: Project title + toggle button --- */}
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <button
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
            aria-controls={`project-${project.id}`}
            className="text-left w-full focus:outline-none"
          >
            {/* 🎨 Project Title size → change text-2xl as you wish */}
            <div className="text-2xl font-bold">{project.title}</div>

            {/* 📝 Short description → change text-base / text-lg */}
            <div className="text-base mt-1 opacity-90">
              {project.shortDescription}
            </div>
          </button>
        </div>

        <div className="ml-4 flex-shrink-0 space-x-2">
          {project.href && (
            <a href={project.href} className="text-sm underline">
              Open project page
            </a>
          )}
          <button
            onClick={() => setOpen((o) => !o)}
            aria-label={open ? `Collapse ${project.title}` : `Expand ${project.title}`}
            className="p-2 rounded hover:bg-gray-100/20"
          >
            <span className="text-xl">{open ? "−" : "+"}</span>
          </button>
        </div>
      </div>

      {/* --- Expandable content --- */}
      <div
        id={`project-${project.id}`}
        className={`mt-4 overflow-hidden transition-[max-height] duration-300 ease-in-out ${
          open ? "max-h-[2000px]" : "max-h-0"
        }`}
        aria-hidden={!open}
      >
        {/* 📖 Full description text size → text-base or text-sm */}
        <div className="text-base mt-2">
          <p>{project.fullDescription ?? project.shortDescription}</p>
        </div>

        {/* --- Chapters toggle --- */}
        {project.chapters && project.chapters.length > 0 && (
          <div className="mt-4">
            <button
              onClick={() => setShowChapters((s) => !s)}
              aria-expanded={showChapters}
              aria-controls={`project-${project.id}-chapters`}
              className="text-sm px-3 py-1 rounded bg-white/10 hover:bg-white/20 border border-white/30"
            >
              {showChapters ? "Hide chapters" : "Show all chapters"}
            </button>

            {/* --- Expandable list of chapters --- */}
            <div
              id={`project-${project.id}-chapters`}
              className={`mt-3 pl-2 overflow-hidden transition-[max-height] duration-300 ease-in-out ${
                showChapters ? "max-h-[2000px]" : "max-h-0"
              }`}
            >
              <div className="mt-2">
                {project.chapters.map((ch) => (
                  <ChapterItem key={ch.id} chapter={ch} />
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
