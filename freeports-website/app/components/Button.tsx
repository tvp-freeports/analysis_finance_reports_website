import React from "react";

interface ButtonProps {
  label: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  className?: string;
  style?: React.CSSProperties;
  type?: "button" | "submit" | "reset";
}

export function Button({
  label,
  onClick,
  className = "",
  style,
  type = "button",
}: ButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      style={style}
      className={`px-4 py-2 transition-all duration-200 ${className}`}
    >
      {label}
    </button>
  );
}

export default Button;




