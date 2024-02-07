import { Heading } from "@/components/theme";
export default async function Page() {
  return (
    <div className="flex h-[100lvh]  flex-row items-end justify-between pb-44">
      <Heading>Work</Heading>
      <nav>
        <ul className="flex list-none flex-col justify-center gap-4 text-2xl font-medium">
          <li>SafetyNet Alert</li>
          <li>The Sill</li>
          <li>Abby&Finn</li>
          <li>Quality Control Solutions</li>
        </ul>
      </nav>
    </div>
  );
}
