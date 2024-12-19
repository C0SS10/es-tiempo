import { Link } from "react-router-dom";
import { Button } from "../atoms/Button";
import { Pause, Play, StopCircle } from "lucide-react";

interface MinuteButtonsProps {
  onAddMinutes: (minutes: number) => void;
  onStopCountdown: () => void;
  onPauseCountdown: () => void;
  onResumeCountdown: () => void;
  isRunning: boolean;
}

export const MinuteButtons: React.FC<MinuteButtonsProps> = ({
  onAddMinutes,
  onStopCountdown,
  onPauseCountdown,
  onResumeCountdown,
  isRunning,
}) => {
  const iconStyle =
    "h-24 w-24 drop-shadow-lg text-secondary-200 p-4 transition-transform ease-in hover:scale-110";

  return (
    <aside className="flex justify-center items-center gap-4">
      <Button
        onClick={() => onAddMinutes(4)}
        size="large"
        animation="underline"
        className="text-8xl px-8"
      >
        4
      </Button>
      <Button
        onClick={() => {
          if (isRunning) {
            onPauseCountdown();
          } else {
            onAddMinutes(0);
            onResumeCountdown();
          }
        }}
        size="large"
        animation="underline"
      >
        {isRunning ? (
          <Pause className={iconStyle} />
        ) : (
          <Play className={iconStyle} />
        )}
      </Button>
      <Button
        variant="link"
        animation="underline"
        size="large"
        onClick={onStopCountdown}
      >
        <StopCircle className={iconStyle} />
      </Button>
      <Link to="/timer">Principal</Link>
    </aside>
  );
};
