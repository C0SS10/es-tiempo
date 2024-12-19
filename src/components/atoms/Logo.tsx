import { Clock } from "lucide-react";

export const Logo = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-8 shadow-[4px_4px_16px_#5d4c68,-4px_-4px_16px_#7d668c] rounded-xl text-secondary-200 py-10 px-6 hover:scale-105 transform transition-transform ease-in-out duration-200">
      <Clock className="h-20 w-20 drop-shadow-lg" />
      <strong className="inline-block text-3xl drop-shadow-lg">
        TimeXtender
      </strong>
    </div>
  );
};
