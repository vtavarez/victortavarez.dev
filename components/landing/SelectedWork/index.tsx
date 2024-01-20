import { Project } from "@/components/theme";

export async function SelectedWork() {
  return (
    <div className="mt-2 border-t-2 border-primary md:mt-0">
      {Array.from({ length: 4 }).map((_, i) => (
        <Project
          key={i}
          number={i * 1}
          details="microsite / masimosafetynetalert.co.uk"
          link=""
          client="masimo"
          date="march 2022"
        />
      ))}
    </div>
  );
}