import { useState, useEffect } from "react";
import { formatTime } from "../../utils/TimeManager";
import { TimeDisplay } from "../atoms/TimeDisplay";
import { MinuteButtons } from "../molecules/MinuteButtons";

export const Countdown: React.FC = () => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval = undefined;

    if (isRunning) {
      interval = setInterval(() => {
        setTime((previousTime) => Math.max(previousTime - 1, 0));
      }, 1000);
    } else if (interval) {
      clearInterval(interval);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isRunning]);

  const addMinutes = (minutes: number) => {
    const newTime = time + minutes * 60;
    if (newTime >= 0) {
      setTime(newTime);
      if (!isRunning) setIsRunning(true);
    }
  };

  return (
    <div className="text-center flex items-center justify-center gap-8">
      <TimeDisplay time={time} formatTime={formatTime} />
      <MinuteButtons onAddMinutes={addMinutes} />
    </div>
  );
};
