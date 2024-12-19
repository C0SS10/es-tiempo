import { useState, useEffect } from "react";
import { TimeDisplay } from "../molecules/TimeDisplay";
import { MinuteButtons } from "../molecules/MinuteButtons";
import { formatTime } from "../../utils/TimeManager";

export const Countdown: React.FC = () => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    if (isRunning) {
      const interval = setInterval(() => {
        setTime((previousTime) => Math.max(previousTime - 1, 0));
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [isRunning]);

  const addMinutes = (minutes: number) => {
    const newTime = time + minutes * 60;

    setTime(newTime);
  };

  const stopCountdown = () => {
    setTime(0);
    setIsRunning(false);
  };

  const pauseCountdown = () => {
    setIsRunning(false);
  };

  const resumeCountdown = () => {
    setIsRunning(true);
  };

  const { days, hours, minutes, seconds } = formatTime(time);

  return (
    <div className="text-center flex flex-col items-center justify-center gap-8">
      <MinuteButtons
        onAddMinutes={addMinutes}
        onStopCountdown={stopCountdown}
        onPauseCountdown={pauseCountdown}
        onResumeCountdown={resumeCountdown}
        isRunning={isRunning}
      />
      <TimeDisplay
        seconds={seconds}
        minutes={minutes}
        hours={hours}
        days={days}
      />
    </div>
  );
};
