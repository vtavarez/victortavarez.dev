import Image from "next/image";

export function Posts() {
  return (
    <div className="flex flex-row gap-4 border-t-2 border-primary pt-2">
      <div className="relative h-10 max-h-full">
        <Image
          className="absolute h-full w-full object-cover"
          src=""
          width={400}
          height={400}
          alt=""
        />
      </div>
      <div>
        <h3 className="text-2xl font-bold">Title</h3>
        <p className="text-sm">Date</p>
        <p className="text-sm">Description</p>
      </div>
    </div>
  );
}
