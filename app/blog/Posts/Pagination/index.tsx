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
  setChunk: (chunk: number) => void;
};

export function PostsPagination({
  currentChunk,
  totalChunks,
  setChunk,
}: PaginationProps) {
  function settingChunk(e: React.MouseEvent<HTMLAnchorElement>, chunk: number) {
    e.stopPropagation();
    e.preventDefault();
    setChunk(chunk);
  }

  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            href="#"
            onClick={(e) => settingChunk(e, currentChunk - 1)}
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
            onClick={(e) => settingChunk(e, currentChunk + 1)}
            aria-disabled={currentChunk === totalChunks}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
