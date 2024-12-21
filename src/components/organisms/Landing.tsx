import { Link } from "react-router-dom";
import { Description } from "../atoms/Description";
import { Logo } from "../atoms/Logo";
import { Button } from "../atoms/Button";
import { Play, Github } from "lucide-react";

export default function Landing() {
  return (
    <div className="flex flex-col items-center px-4 sm:px-8 md:px-12 lg:px-16">
      <Link to="https://www.GitHub.com/C0SS10" target="_blank">
        <Button
          variant="ghost"
          animation="background"
          className="mb-12 mt-4 md:mb-16 lg:mb-20"
        >
          <Github className="h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16 drop-shadow-lg text-secondary-200" />
        </Button>
      </Link>

      <section className="flex flex-col items-center justify-center text-center space-y-8 sm:space-y-10 md:space-y-12 lg:space-y-16 max-w-lg md:max-w-xl lg:max-w-2xl">
        <Logo />
        <Description className="text-lg sm:text-xl md:text-2xl lg:text-4xl">
          <strong>Es Tiempo</strong> es un temporizador de cuenta regresiva
          simple y minimalista
        </Description>
        <Link to="/timer">
          <Button size="large" animation="background">
            <Play className="h-6 w-6 sm:h-8 sm:w-8 md:h-10 md:w-10" />
          </Button>
        </Link>
      </section>
    </div>
  );
}
