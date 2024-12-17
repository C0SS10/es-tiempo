import { ReactNode } from "react";
import cn from "classnames";

interface ButtonProps {
  children: ReactNode;
  className?: string;
  animation?: "scale" | "underline" | "background" | "shadow";
  size?: "small" | "medium" | "large";
  variant?: "destructive" | "ghost" | "link" | "default";
  onClick?: () => void;
}

export const Button = ({
  children,
  size = "medium",
  variant = "default",
  animation = "background",
  className,
  onClick,
}: ButtonProps) => {
  const sizes = {
    small: "p-2 text-lg",
    medium: "p-3 text-xl",
    large: "p-4 text-4xl",
  };

  const style = {
    destructive: "bg-primary",
    ghost: "bg-transparent border border-secondary-200",
    link: "bg-transparent no-underline",
    default: "bg-primary",
  };

  const hover = {
    scale:
      "hover:scale-110 transform transition-transform ease-in-out duration-300",
    underline: "hover:underline",
    background: "hover:bg-secondary-100/20 transition-colors ease duration-200",
    shadow:
      "hover:shadow-[8px_8px_20px_#5d4c68,-8px_-8px_20px_#7d668c] transition-shadow ease duration-200",
  };

  return (
    <button
      className={cn(
        sizes[size],
        style[variant],
        hover[animation],
        className,
        "shadow-[4px_4px_16px_#5d4c68,-4px_-4px_16px_#7d668c] text-secondary-200 rounded-lg font-bold"
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
