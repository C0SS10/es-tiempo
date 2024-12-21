import { useState, useEffect } from "react";
import { TimeDisplay } from "../molecules/TimeDisplay";
import { CountdownButtons } from "../molecules/CoutdownButtons";
import { formatTime } from "../../utils/TimeManager";
import { Pause, Play, StopCircle } from "lucide-react";

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

  const iconStyles = "h-16 w-16 transition-transform ease-in hover:scale-110";

  const options = [
    {
      label: isRunning ? "Pausar" : "Reanudar",
      onClick: isRunning ? pauseCountdown : resumeCountdown,
      icon: isRunning ? (
        <Pause className={iconStyles} />
      ) : (
        <Play className={iconStyles} />
      ),
    },
    {
      label: "Detener",
      onClick: stopCountdown,
      icon: <StopCircle className={iconStyles} />,
    },
  ];

  const numberButtons = [
    {
      label: "4",
      onClick: () => addMinutes(4),
      className: "text-6xl px-6",
    },
    {
      label: "1",
      onClick: () => addMinutes(1),
      className: "text-6xl px-6",
    },
    {
      label: "24H",
      onClick: () => addMinutes(1440),
      className: "text-6xl px-6",
    },
    {
      label: "1H",
      onClick: () => addMinutes(60),
      className: "text-6xl px-6",
    },
  ];

  return (
    <div className="text-center flex flex-col items-center justify-center gap-12">
      <CountdownButtons options={options} />
      <TimeDisplay
        seconds={seconds}
        minutes={minutes}
        hours={hours}
        days={days}
      />
      <CountdownButtons options={numberButtons} />
    </div>
  );
};
