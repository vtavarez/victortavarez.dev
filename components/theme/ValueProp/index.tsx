export function ValueProp({
  number,
  children,
}: {
  number: string;
  children: React.ReactNode;
}) {
  return (
    <div className="grid grid-cols-12 gap-4 py-24 text-2xl xl:py-48">
      <div className="col-span-4 text-lg font-medium leading-loose">
        /{number}
      </div>
      <div className="text-balance col-span-8 text-left text-3xl font-medium lg:text-5xl xl:mr-auto">
        {children}
      </div>
    </div>
  );
}
