export default function Items({
  items,
}: {
  items: Array<{ id: number; cta: string }>;
}) {
  return (
    <div className="inline-block">
      <div className="inline-flex w-max transform-gpu animate-marquee text-4xl font-semibold will-change-transform group-hover:[animation-play-state:paused] xl:text-[4rem]">
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
