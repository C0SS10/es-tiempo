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
        <Button variant="ghost" animation="background" className="mb-32 mt-4">
          <Github className="h-16 w-16 drop-shadow-lg text-secondary-200" />
        </Button>
      </Link>
      <section className="flex items-center justify-center space-x-12 m-12 max-w-5xl">
        <Logo />
        <Description>
          TimeXtender es una herramientas para los streamer de Twitch para
          cuando hagan directos
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
