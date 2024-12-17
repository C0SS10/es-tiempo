import { Link } from "react-router-dom";
import { Button } from "../atoms/Button";

interface MinuteButtonsProps {
  onAddMinutes: (minutes: number) => void;
}

export const MinuteButtons: React.FC<MinuteButtonsProps> = ({
  onAddMinutes,
}) => {
  return (
    <aside className="flex justify-center items-center flex-col gap-4">
      <Button
        onClick={() => onAddMinutes(4)}
        size="large"
        animation="background"
        className="flex items-center gap-2"
      >
        Agregar 4 minutos
      </Button>
      <Link to="/">
        <Button variant="link" animation="underline" size="large">
          Principal
        </Button>
      </Link>
    </aside>
  );
};
