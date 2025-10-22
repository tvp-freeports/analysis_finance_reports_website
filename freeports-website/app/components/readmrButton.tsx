import React from "react";

interface ReadmrButtonProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  label: string;
  href?: string;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
  className?: string;
  style?: React.CSSProperties; // make sure this is here
}

export function ReadmrButton({
  label,
  href = "#",
  onClick,
  className = "",
  style,
  ...props
}: ReadmrButtonProps) {
  return (
    <a
      href={href}
      onClick={(e) => {
        onClick?.(e);
        e.stopPropagation(); // prevent toggle
      }}
      className={`bg-white font-inter text-[24px] font-bold px-6 py-3 rounded-full inline-block select-none transition duration-300 ${className}`}
      style={style}
      {...props}
    >
      {label}
    </a>
  );
}


