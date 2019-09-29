import React from 'react'
import { Link } from 'gatsby'
import { Button } from 'Common'
import { PageNumberingWrapper, PageNumber } from '../styles'

export const PageNumbering = ({ numPages }) => {
	return (
		<PageNumberingWrapper>
			{Array.from({ length: numPages }, (_, i) => (
				<PageNumber
					as={Link}
					key={`pagination-number${i + 1}`}
					to={`/blog/${i === 0 ? '' : i + 1}`}
				>
					{i + 1}
				</PageNumber>
			))}
		</PageNumberingWrapper>
	)
}
