import cn from "classnames";
import React from "react";

interface DescriptionProps {
  children: React.ReactNode;
  className?: string;
}

export const Description: React.FC<DescriptionProps> = ({
  children,
  className,
}) => {
  return (
    <p className={cn(className, "text-4xl font-extrabold text-secondary-200")}>
      {children}
    </p>
  );
};
