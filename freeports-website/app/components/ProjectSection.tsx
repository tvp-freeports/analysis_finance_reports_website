import React from "react";

export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription?: string;
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

  // Apply chosen background + text colors (fallback to neutral)
  const backgroundClass = project.bgColor ?? "bg-white dark:bg-gray-900";
  const textClass = project.textColor ?? "text-black dark:text-white";

  return (
    <section
      // Add conditional rounded radius and remove border
      className={`col-span-full col-start-1 w-full max-w-4xl mx-auto mb-8 
        ${backgroundClass} ${textClass} 
        ${open ? "rounded-none" : "rounded-3xl"} 
        p-6 shadow-sm transition-all duration-300 cursor-pointer`}
      onClick={() => setOpen((o) => !o)}
      aria-expanded={open}
      aria-controls={`project-${project.id}`}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          setOpen((o) => !o);
        }
      }}
    >
      {/* Header content */}
      <div className="flex flex-col">
        {/* Project Title */}
        <div className="text-2xl font-bold">{project.title}</div>

        {/* Short description */}
        <div className="text-base mt-1 opacity-90">{project.shortDescription}</div>
      </div>

      {/* Expandable content */}
      <div
        id={`project-${project.id}`}
        className={`mt-4 overflow-hidden transition-[max-height] duration-300 ease-in-out ${
          open ? "max-h-[2000px]" : "max-h-0"
        }`}
        aria-hidden={!open}
      >
        <div className="text-base mt-2">
          <p>{project.fullDescription ?? project.shortDescription}</p>
        </div>
      </div>
    </section>
  );
}



