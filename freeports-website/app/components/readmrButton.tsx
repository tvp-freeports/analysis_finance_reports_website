import React from "react";

interface ReadmrButtonProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  label: string;
  href?: string;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
  className?: string;
}

export function ReadmrButton({
  label,
  href = "#",
  onClick,
  className = "",
  ...props
}: ReadmrButtonProps) {
  return (
    <a
      href={href}
      onClick={(e) => {
        onClick?.(e);
        e.stopPropagation();
      }}
      className={`bg-white text-black font-inter text-[24px] font-bold px-6 py-3 rounded-full inline-block select-none transition duration-300 ${className}`}
      {...props}
    >
      {label}
    </a>
  );
}

