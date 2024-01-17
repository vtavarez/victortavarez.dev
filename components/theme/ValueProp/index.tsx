export function ValueProp({
  number,
  children,
}: {
  number: string;
  children: React.ReactNode;
}) {
  return (
    <div className="my-48 grid grid-cols-12 gap-4 text-2xl">
      <div className="col-span-4 text-lg font-medium leading-loose">
        /{number}
      </div>
      <div className="col-span-8 text-left text-4xl font-medium lg:text-5xl xl:mr-auto">
        {children}
      </div>
    </div>
  );
}
