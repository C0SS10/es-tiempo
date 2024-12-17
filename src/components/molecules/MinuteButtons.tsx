import { Button } from "../atoms/Button";

interface MinuteButtonsProps {
  onAddMinutes: (minutes: number) => void;
}

export const MinuteButtons: React.FC<MinuteButtonsProps> = ({
  onAddMinutes,
}) => (
  <aside className="flex justify-center items-center flex-col gap-4">
    <Button
      onClick={() => onAddMinutes(4)}
      size="large"
      animation="background"
      className="flex items-center gap-2"
    >
      Agregar 4 minutos
    </Button>
    <Button
      onClick={() => onAddMinutes(2)}
      variant="link"
      size="small"
      animation="scale"
    >
      Agregar 2 minutos
    </Button>
  </aside>
);
