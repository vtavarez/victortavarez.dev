export default function Items({
  items,
}: {
  items: Array<{ id: number; cta: string }>;
}) {
  return (
    <div className="inline-block">
      <div
        className={`grid w-max animate-marquee grid-cols-${items.length} text-[4rem] font-semibold group-hover:[animation-play-state:paused]`}
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
