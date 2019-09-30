import React from 'react'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import { Wrapper, Tag } from './styles'

export const Tags = ({ tags }) => (
	<Wrapper>
		{tags.map(tag => (
			<Tag
				key={tag.fieldValue ? tag.fieldValue : tag}
				as={AniLink}
				paintDrip
				hex="#2ecc71"
				to={`/blog/tags/${tag.fieldValue ? tag.fieldValue : tag}/`}
			>
				{tag.fieldValue ? tag.fieldValue.toUpperCase() : tag.toUpperCase()}
			</Tag>
		))}
	</Wrapper>
)
