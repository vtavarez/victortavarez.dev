import Intro from "./Intro";
import Summery from "./Summery";
import { ContactButton } from "@/components/ui";

export function Hero() {
  return (
    <div className="my-6 flex flex-col gap-4 xl:my-12">
      <Intro />
      <Summery />
      <ContactButton cta="Get in touch" />
    </div>
  );
}
