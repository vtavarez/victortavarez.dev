export function ValueProp({
  number,
  content,
}: {
  number: string;
  content: Array<{ content: string }>;
}): JSX.Element {
  return (
    <div className="my-48 grid grid-cols-3 gap-4 text-2xl">
      <div className="text-lg font-medium">({number})</div>
      <div className="col-span-2 text-left text-4xl font-medium leading-snug xl:pe-80">
        {content.map(({ content }, idx) => (
          <p
            className="mb-5"
            key={idx}
          >
            {content}
          </p>
        ))}
      </div>
    </div>
  );
}
