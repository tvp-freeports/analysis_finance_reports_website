import React from "react";

export interface Chapter {
  id: string;
  title: string;
  description?: string;
  href?: string;
}

interface ChapterItemProps {
  chapter: Chapter;
  initiallyOpen?: boolean;
}

/**
 * Collapsible chapter item with adjustable font sizes.
 */
export function ChapterItem({ chapter, initiallyOpen = false }: ChapterItemProps) {
  const [open, setOpen] = React.useState(initiallyOpen);

  return (
    <div className="mb-3 border-l-4 border-indigo-300 pl-3">
      <div className="flex items-center justify-between">
        <button
          onClick={() => setOpen((o) => !o)}
          aria-expanded={open}
          aria-controls={`chapter-${chapter.id}`}
          className="text-left flex-1 p-2 rounded hover:bg-gray-50/20 focus:outline-none"
        >
          {/* 🎨 Chapter Title size → adjust text-lg */}
          <div className="font-semibold text-lg">{chapter.title}</div>
        </button>

        {chapter.href && (
          <a
            href={chapter.href}
            className="ml-3 text-sm underline"
            title={`Open full page for ${chapter.title}`}
          >
            Open
          </a>
        )}

        <button
          onClick={() => setOpen((o) => !o)}
          className="ml-3 p-2 rounded hover:bg-gray-100/20"
          aria-label={open ? `Collapse ${chapter.title}` : `Expand ${chapter.title}`}
        >
          <span className="text-sm">{open ? "−" : "+"}</span>
        </button>
      </div>

      {/* 📝 Inner text size → adjust text-sm */}
      <div
        id={`chapter-${chapter.id}`}
        className={`mt-2 overflow-hidden transition-[max-height] duration-300 ease-in-out ${
          open ? "max-h-96" : "max-h-0"
        }`}
        aria-hidden={!open}
      >
        <div className="pl-4 text-sm opacity-90">
          {chapter.description ?? <em>No summary provided.</em>}
        </div>
      </div>
    </div>
  );
}