import React from "react";
import type { CardInfo } from "./Card";
import { BaseCard, getBgClass, toCssColorFromBgClass } from "./Card";


interface ToolCardProps {
  card: CardInfo;
}

const hoverBgMap: Record<string, string> = {
  "tool-1": "#fc3284",
  "tool-2": "#d422ff",
  "tool-3": "#f9be2d",
};

export function ToolsCard({ card }: ToolCardProps) {

  const bgClass = getBgClass(card);
  const baseCssColor = toCssColorFromBgClass(bgClass, "");

  const handleClick = () => {
    if (card.href) window.location.href = card.href;
  };

  return (
    < BaseCard 
      card = {card}
      className = "gap-3"
      role = "link"
      tabIndex = {0}
      onClick = {handleClick}
      onKeyDown = {(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          handleClick();
        }
      }}
      onMouseEnter = {(e) => {
        const hoverBgColor = hoverBgMap[card.id];
        if (hoverBgColor) {
          (e.currentTarget as HTMLElement).style.backgroundColor = hoverBgColor;
        } else if (baseCssColor) {
          (e.currentTarget as HTMLElement).style.backgroundColor = baseCssColor;
        }
      }}
      onMouseLeave = {(e) => {
        if (baseCssColor) {
          (e.currentTarget as HTMLElement).style.backgroundColor = baseCssColor;
        } else {
          (e.currentTarget as HTMLElement).style.backgroundColor = "";
        }
      }}
    >
      <h2 className="font-bold"> {card.title} </h2>
      <p className = "opacity-90"> {card.fullDescription} </p>
    </BaseCard>
  );
}

