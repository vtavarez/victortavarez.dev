'use client';
import { useSearchParams, usePathname } from 'next/navigation';
import {
	Pagination,
	PaginationContent,
	PaginationEllipsis,
	PaginationItem,
	PaginationLink,
	PaginationNext,
	PaginationPrevious,
} from '@/components/ui/';

type Props = {
	numberOfPages: number;
};

export function PostsPagination({ numberOfPages, ...props }: Props) {
	const pathname = usePathname();
	const params = useSearchParams();
	const page = parseInt(params.get('page') || '1');

	return (
		<Pagination {...props}>
			<PaginationContent>
				<PaginationItem>
					<PaginationPrevious
						href={page === 1 ? '#' : `${pathname}?page=${page - 1}`}
						isActive={page !== 1}
						aria-disabled={page === 1}
					/>
				</PaginationItem>
				{Array.from({ length: numberOfPages }).map((_, i) => (
					<PaginationItem key={i}>
						<PaginationLink
							href={i + 1 > 1 ? `${pathname}?page=${i + 1}` : pathname}
							isActive={i + 1 !== 1 && i + 1 !== numberOfPages - 1}
							aria-disabled={i + 1 === 1 || i + 1 === numberOfPages - 1}
							aria-current={i + 1 === page}
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
						href={page === numberOfPages ? '#' : `${pathname}?page=${page + 1}`}
						isActive={page !== numberOfPages}
						aria-disabled={page === numberOfPages}
					/>
				</PaginationItem>
			</PaginationContent>
		</Pagination>
	);
}
