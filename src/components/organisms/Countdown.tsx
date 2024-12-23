import { TimeDisplay } from "../molecules/TimeDisplay";
import { CountdownButtons } from "../molecules/CoutdownButtons";
import { formatTime } from "../../utils/TimeManager";
import { Pause, Play, StopCircle } from "lucide-react";
import { useCountdown } from "../../hooks/useCountdown";

export const Countdown: React.FC = () => {
  const {
    time,
    isRunning,
    addMinutes,
    stopCountdown,
    pauseCountdown,
    resumeCountdown,
  } = useCountdown();
  const { days, hours, minutes, seconds } = formatTime(time);

  const iconStyles = "h-16 w-16 transition-transform ease-in hover:scale-110";
  const buttonStyle = "text-6xl transition-transform ease-in hover:scale-105";

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
      buttonStyle: buttonStyle,
      title: "Agregar 30 segundos",
    },
    {
      label: "1M",
      onClick: () => addMinutes(1),
      buttonStyle: buttonStyle,
      title: "Agregar 1 minutos",
    },
    {
      label: "1D",
      onClick: () => addMinutes(1440),
      buttonStyle: buttonStyle,
      title: "Agregar 1 hora",
    },
    {
      label: "1H",
      onClick: () => addMinutes(60),
      buttonStyle: buttonStyle,
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
