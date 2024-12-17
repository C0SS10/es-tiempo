interface TimeDisplayProps {
  time: number;
  formatTime: (time: number) => string;
}

export const TimeDisplay: React.FC<TimeDisplayProps> = ({
  time,
  formatTime,
}) => (
  <section>
    <h1 className="text-5xl text-secondary-200 font-bold font-mono">
      {formatTime(time)}
    </h1>
  </section>
);
