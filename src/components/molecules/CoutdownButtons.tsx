import { Button } from "../atoms/Button";

interface CountdownButtonOption {
  label: string;
  onClick: () => void;
  icon?: React.ReactNode;
  className?: string;
}

interface CountdownButtonsProps {
  options: CountdownButtonOption[];
}

export const CountdownButtons: React.FC<CountdownButtonsProps> = ({
  options,
}) => {
  return (
    <aside className="grid grid-cols-2 grid-rows-1 xl:grid-cols-2 xl:grid-rows-1 justify-center items-center gap-4">
      {options.map((option, index) => (
        <Button
          key={index}
          onClick={option.onClick}
          className={option.className}
          size="large"
        >
          {option.icon ? option.icon : option.label}
        </Button>
      ))}
    </aside>
  );
};
