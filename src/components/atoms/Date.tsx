import React from "react";
import cn from "classnames";

interface DateProps {
  dateType: string;
  className?: string;
  maxDate: number;
  value: number;
}

export const Date: React.FC<DateProps> = ({
  dateType,
  className,
  maxDate,
  value,
}) => {
  const formattedValue = String(Math.min(value, maxDate)).padStart(2, "0");
  return (
    <div
      className={cn(
        "relative w-20 md:w-28 flex flex-col items-center justify-center text-center before:absolute before:inset-x-[-5px] before:inset-y-0",
        className
      )}
    >
      <strong className="-skew-x-3 text-center text-6xl md:text-7xl lg:text-8xl font-bold">
        {formattedValue}
      </strong>
      <span className="text-xl md:text-2xl uppercase">{dateType}</span>
    </div>
  );
};
