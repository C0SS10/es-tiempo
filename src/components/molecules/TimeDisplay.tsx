import { Date } from "../atoms/Date";

interface TimeDisplayProps {
  seconds: number;
  minutes: number;
  hours: number;
  days: number;
}

export const TimeDisplay: React.FC<TimeDisplayProps> = ({
  seconds,
  minutes,
  hours,
  days,
}) => {
  return (
    <div className="flex justify-center gap-8 text-secondary-200 font-bold select-none">
      <Date value={days} dateType="Días" maxDate={99} />
      <Date value={hours} dateType="Horas" maxDate={23} />
      <Date value={minutes} dateType="Minutos" maxDate={59} />
      <Date value={seconds} dateType="Segundos" maxDate={59} />
    </div>
  );
};
