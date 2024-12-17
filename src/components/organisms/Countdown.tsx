import { useState, useEffect } from "react";
import { TimeDisplay } from "../molecules/TimeDisplay";
import { MinuteButtons } from "../molecules/MinuteButtons";

export const Countdown: React.FC = () => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval = undefined;

    if (isRunning) {
      interval = setInterval(() => {
        setTime((prevTime) => Math.max(prevTime - 1, 0));
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

  const days = Math.floor(time / (60 * 60 * 24));
  const hours = Math.floor((time % (60 * 60 * 24)) / (60 * 60));
  const minutes = Math.floor((time % (60 * 60)) / 60);
  const seconds = Math.floor(time % 60);

  return (
    <div className="text-center flex flex-col items-center justify-center gap-8">
      <TimeDisplay
        seconds={seconds}
        minutes={minutes}
        hours={hours}
        days={days}
      />
      <MinuteButtons onAddMinutes={addMinutes} />
    </div>
  );
};
