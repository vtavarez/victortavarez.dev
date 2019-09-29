import React from 'react'
import { Link } from 'gatsby'
import { PreviousNextWrapper, PageNumberingWrapper, PageNumber } from './styles'

export const PreviousNext = ({ currentPage, numPages, location }) => {
	const isFirst = currentPage === 1
	const isLast = currentPage === numPages
	const prevPage = currentPage - 1 === 1 ? '/' : (currentPage - 1).toString()
	const nextPage = (currentPage + 1).toString()

	return (
		<PreviousNextWrapper>
			{!isFirst && (
				<Link to={`${location}/${prevPage}`} rel="prev">
					← Previous Page
				</Link>
			)}
			{!isLast && (
				<Link to={`${location}/${nextPage}`} rel="next">
					Next Page →
				</Link>
			)}
		</PreviousNextWrapper>
	)
}

export const PageNumbering = ({ numPages, location }) => {
	return (
		<PageNumberingWrapper>
			{Array.from({ length: numPages }, (_, i) => (
				<PageNumber
					as={Link}
					key={`pagination-number${i + 1}`}
					to={`${location}/${i === 0 ? '' : i + 1}`}
				>
					{i + 1}
				</PageNumber>
			))}
		</PageNumberingWrapper>
	)
}
