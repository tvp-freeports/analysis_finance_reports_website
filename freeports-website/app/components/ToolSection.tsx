import React from "react";
import type { ElementCollapsableListInfos } from "./lists/collapsable";

interface ToolSectionProps {
  tool: ElementCollapsableListInfos;
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
      className={`w-full max-w-4xl p-6 shadow-sm cursor-pointer ${tool.bgColor} ${tool.textColor} rounded-none transition`}
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
      <h2 className="text-2xl font-bold mb-2">{tool.title}</h2>
      <p className="text-base opacity-90">{tool.shortDescription}</p>
    </a>
  );
}




