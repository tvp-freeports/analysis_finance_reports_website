import React from "react";

export type CardInfo = {
    id: string;
    title: string;
    shortDescription?: string;
    fullDescription: string;
    bgColor?: string;
    textColor?: string;
    href?: string;
}

export const DEFAULT_BG_CLASS = "bg-[#030712]"; // dark background
export const DEFAULT_TEXT_CLASS = "text-white"; 
export const BASE_CARD_CLASSES =
  "flex flex-col w-full max-w-2xl p-6 shadow-sm rounded-none transition-colors duration-300 ease-in-out";

export function getBgClass(card: CardInfo): string {
  return card.bgColor ?? DEFAULT_BG_CLASS;
}

export function getTextClass(card: CardInfo): string {
  return card.textColor ?? DEFAULT_TEXT_CLASS;
}

export function toCssColorFromBgClass(bgClass: string, fallback: string = ""): string {
  const match = bgClass.match(/bg-\[(#[0-9a-fA-F]{3,8})\]/);
  return match ? match[1] : fallback;
}

export function BaseCard({
    card,
    className = "",
    children,
    isClickable = true,
    ...props
}: {
    card: CardInfo;
    className?: string;
    children?: React.ReactNode;
    isClickable?: boolean;
} & React.HTMLAttributes<HTMLElement>) {
  const bgClass = getBgClass(card);
  const textClass = getTextClass(card);

  return (
    <section
      className={`${BASE_CARD_CLASSES} ${bgClass} ${textClass} ${className} ${isClickable ? "cursor-pointer" : "cursor-default"}`}
      {...props}
    >
      {children}
    </section>
  );
}