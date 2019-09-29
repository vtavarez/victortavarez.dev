import React from 'react'
import { Link } from 'gatsby'
import { PreviousNextWrapper } from '../styles'

export const PreviousNext = ({ currentPage, numPages }) => {
	const isFirst = currentPage === 1
	const isLast = currentPage === numPages
	const prevPage = currentPage - 1 === 1 ? '/' : (currentPage - 1).toString()
	const nextPage = (currentPage + 1).toString()

	return (
		<PreviousNextWrapper>
			{!isFirst && (
				<Link to={`/blog/${prevPage}`} rel="prev">
					← Previous Page
				</Link>
			)}
			{!isLast && (
				<Link to={`/blog/${nextPage}`} rel="next">
					Next Page →
				</Link>
			)}
		</PreviousNextWrapper>
	)
}
