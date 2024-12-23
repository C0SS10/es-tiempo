import { useEffect, useState } from "react";

export function useCountdown() {
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

  return {
    time,
    isRunning,
    addMinutes,
    stopCountdown,
    pauseCountdown,
    resumeCountdown,
  };
}
