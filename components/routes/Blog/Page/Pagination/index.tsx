import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/";

type PaginationProps = {
  currentChunk: number;
  totalChunks: number;
  requestedChunk: (chunk: number) => void;
};

export function PostsPagination({
  currentChunk,
  totalChunks,
  requestedChunk,
  ...props
}: PaginationProps) {
  return (
    <Pagination {...props}>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            href="#"
            className={
              currentChunk === 1 ? "pointer-events-none opacity-50" : ""
            }
            onClick={(e) => (
              e.preventDefault(), requestedChunk(currentChunk - 1)
            )}
            aria-disabled={currentChunk === 1}
          />
        </PaginationItem>
        {Array.from({ length: totalChunks }).map((_, i) => (
          <PaginationItem key={i}>
            <PaginationLink
              href="#"
              isActive={i + 1 === currentChunk}
            >
              {i + 1}
            </PaginationLink>
          </PaginationItem>
        ))}
        <PaginationItem>
          <PaginationEllipsis />
        </PaginationItem>
        <PaginationItem>
          <PaginationNext
            href="#"
            className={
              currentChunk === totalChunks
                ? "pointer-events-none opacity-50"
                : ""
            }
            onClick={(e) => (
              e.preventDefault(), requestedChunk(currentChunk + 1)
            )}
            aria-disabled={currentChunk === totalChunks}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
