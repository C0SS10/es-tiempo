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
      label: "30S",
      onClick: () => addMinutes(0.5),
      buttonStyle: "text-6xl transition-transform ease-in hover:scale-105",
      title: "Agregar 30 segundos",
    },
    {
      label: "1M",
      onClick: () => addMinutes(1),
      buttonStyle: "text-6xl transition-transform ease-in hover:scale-105",
      title: "Agregar 1 minutos",
    },
    {
      label: "1D",
      onClick: () => addMinutes(1440),
      buttonStyle: "text-6xl transition-transform ease-in hover:scale-105",
      title: "Agregar 1 hora",
    },
    {
      label: "1H",
      onClick: () => addMinutes(60),
      buttonStyle: "text-6xl transition-transform ease-in hover:scale-105",
      title: "Agregar 1 hora",
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
