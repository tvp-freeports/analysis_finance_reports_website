import React from "react";

export type Tool = {
  id: string;
  title: string;
  fullDescription: string;
  bgColor: string;
  textColor: string;
  href?: string;
};

interface ToolSectionProps {
  tool: Tool;
}

const hoverBgMap: Record<string, string> = {
  "tool-1": "#fc3284", // pink
  "tool-2": "#f9be2d", // yellow
  "tool-3": "#d422ff", // purple
};

export function ToolSection({ tool }: ToolSectionProps) {
  return (
    <a
      href={tool.href ?? "#"} // ✅ use href from tool object
      className={`flex flex-col gap-3 w-full max-w-2xl p-6 shadow-sm cursor-pointer ${tool.bgColor} ${tool.textColor} rounded-none transition`}
      style={{
        transition: "background-color 0.3s ease",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.backgroundColor =
          hoverBgMap[tool.id] ?? tool.bgColor.replace("bg-[", "").replace("]", "");
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.backgroundColor =
          tool.bgColor.replace("bg-[", "").replace("]", "");
      }}
    >
      <h2 className="font-bold">{tool.title}</h2>
      <p className="opacity-90">{tool.fullDescription}</p>
    </a>
  );
}

