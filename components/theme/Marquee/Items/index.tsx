export default function Items({
  items,
}: {
  items: Array<{ id: number; cta: string }>;
}) {
  return (
    <div className="inline-block">
      <div
        className={`inline-flex w-max animate-marquee text-4xl font-semibold group-hover:[animation-play-state:paused] xl:text-[4rem]`}
      >
        {items.map(({ id, cta }: { id: number; cta: string }) => (
          <span
            id={`item${id}`}
            key={id}
            className="mx-6"
          >
            {cta}
          </span>
        ))}
      </div>
    </div>
  );
}
