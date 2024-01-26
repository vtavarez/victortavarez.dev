import { ArrowDown } from "lucide-react";
export function Heading({ children }: { children: React.ReactNode }) {
  return (
    <div className="my-8 flex w-full flex-row items-start justify-center border-4 border-primary p-4 shadow-project xl:p-6">
      <h1 className="text-3xl font-bold xl:text-5xl">{children}</h1>
      <ArrowDown className="ml-auto h-10 w-10" />
    </div>
  );
}
