import { Link } from "react-router-dom";
import { Button } from "../atoms/Button";

interface MinuteButtonsProps {
  onAddMinutes: (minutes: number) => void;
}

export const MinuteButtons: React.FC<MinuteButtonsProps> = ({
  onAddMinutes,
}) => {
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
      <Link to="/">
        <Button
          variant="link"
          animation="underline"
          size="large"
          className="text-8xl px-8"
        >
          8
        </Button>
      </Link>
    </aside>
  );
};
