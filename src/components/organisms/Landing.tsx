import { Link } from "react-router-dom";
import { Description } from "../atoms/Description";
import { Logo } from "../atoms/Logo";
import { Button } from "../atoms/Button";
import { Play } from "lucide-react";
import { Github } from "lucide-react";

export default function Landing() {
  return (
    <>
      <Link to="https://www.GitHub.com/C0SS10" target="_blank">
        <Button variant="ghost" animation="background" className="mb-20 mt-4">
          <Github className="h-16 w-16 drop-shadow-lg text-secondary-200" />
        </Button>
      </Link>
      <section className="flex flex-col items-center justify-center space-y-12 max-w-2xl text-center">
        <Logo />
        <Description>
          <strong>Es Tiempo</strong> es un temporizador de cuenta regresiva
          simple y minimalista
        </Description>
        <Link to="/timer">
          <Button size="medium" animation="background">
            <Play />
          </Button>
        </Link>
      </section>
    </>
  );
}
