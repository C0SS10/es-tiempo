import { Button } from "../atoms/Button";

interface CountdownButtonOption {
  label: string;
  onClick: () => void;
  icon?: React.ReactNode;
  title?: string;
  className?: string;
}

interface CountdownButtonsProps {
  options: CountdownButtonOption[];
}

export const CountdownButtons: React.FC<CountdownButtonsProps> = ({
  options,
}) => {
  const OPTION_LENGTH = options.length;

  let styleGrid =
    "grid grid-cols-2 grid-rows-1 xl:grid-cols-2 xl:grid-rows-1 justify-center items-center gap-4";

  if (OPTION_LENGTH > 2) {
    styleGrid =
      "grid grid-cols-2 grid-rows-2 md:grid-cols-3 md:grid-row-2 xl:grid-cols-4 xl:grid-rows-1 justify-center items-center gap-4";
  }

  return (
    <aside className={styleGrid}>
      {options.map((option, index) => (
        <Button
          key={index}
          onClick={option.onClick}
          className={option.className}
          size="large"
          title={option.title}
        >
          {option.icon ? option.icon : option.label}
        </Button>
      ))}
    </aside>
  );
};
