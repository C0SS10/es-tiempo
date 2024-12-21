import { ArrowLeft } from "lucide-react";
import { Countdown } from "../components/organisms/Countdown";
import { Link } from "react-router-dom";
import { Button } from "../components/atoms/Button";

export default function Timer() {
  return (
    <section className="bg-primary w-screen h-screen flex items-center justify-center">
      <Link to="/" className="absolute top-4 left-4 sm:top-8 sm:left-8">
        <Button animation="scale">
          <ArrowLeft className="h-8 w-8 text-secondary-200 sm:h-10 sm:w-10" />
        </Button>
      </Link>
      <Countdown />
    </section>
  );
}
