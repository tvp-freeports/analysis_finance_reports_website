import React from "react";
import type { CardInfo } from "./Card";
import { BaseCard, toCssColorFromBgClass } from "./Card"; // ✅ use BaseCard
import { Button } from "../ui/Button";

export enum CardState {
  Default,
  Expanded,
  Collapsed,
}

interface ProjectCardProps {
  card: CardInfo;
  state: CardState;
  onClick: () => void;
}

const expandedBgColorMap: Record<string, string> = {
  "project-1a": "#fc3284",
  "project-2a": "#d422ff",
  "project-3a": "#f9be2d",
};

export function ProjectsCard({ card, state, onClick }: ProjectCardProps) {
  const expandedBgColor = expandedBgColorMap[card.id];
  const baseBgColor = toCssColorFromBgClass(card.bgColor ?? "bg-[#030712]", "#030712");
  const isExpanded = state === CardState.Expanded;

  return (
    <BaseCard
      card={card}
      isClickable={true}
      role="button"
      tabIndex={0}
      aria-expanded={isExpanded}
      aria-controls={`project-${card.id}`}
      onClick={onClick}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onClick();
        }
      }}
      onMouseEnter={(e) => {
        if (!isExpanded && expandedBgColor) {
          (e.currentTarget as HTMLElement).style.backgroundColor = expandedBgColor;
        }
      }}
      onMouseLeave={(e) => {
        if (!isExpanded) {
          (e.currentTarget as HTMLElement).style.backgroundColor = baseBgColor;
        }
      }}
      style={{
        backgroundColor: isExpanded ? expandedBgColor : baseBgColor,
      }}
      className="col-span-full col-start-1 w-full max-w-2xl mx-auto mb-6"
    >
      {/* Header */}
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <div className="text-2xl font-bold mb-2">{card.title}</div>
          <div className="text-base opacity-90 text-justify [text-justify:inter-word]">
            {card.shortDescription}
          </div>
        </div>

        {card.href && (
          <a
            href={card.href}
            className="text-sm underline ml-4 flex-shrink-0"
            onClick={(e) => e.stopPropagation()}
          >
            Open project page
          </a>
        )}
      </div>

      {/* Expandable content */}
      <div
        id={`project-${card.id}`}
        className={`mt-4 overflow-hidden transition-[max-height] duration-300 ease-in-out ${
          isExpanded ? "max-h-[2000px]" : "max-h-0"
        }`}
        aria-hidden={!isExpanded}
      >
        <div className="relative flex flex-col h-full justify-between pr-2 pb-4">
          <div>
            <p className="text-base text-justify [text-justify:inter-word]">
              {card.fullDescription ?? card.shortDescription}
            </p>
          </div>

          {/* ✅ Button stays fixed at bottom */}
          <div className="flex justify-end mt-4">
            <a href="#" onClick={(e) => e.stopPropagation()}>
              <Button
                label="Read More"
                style={{
                  color: expandedBgColor ?? "#000",
                }}
                className="bg-white px-6 py-3 rounded-full"
              />
            </a>
          </div>
        </div>
      </div>
    </BaseCard>
  );
}
