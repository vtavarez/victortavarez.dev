import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { Container } from 'Common'
import ReactMarkdown from 'react-markdown'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import {
	Wrapper,
	Details,
	Button,
	ReadingTime,
	PostDate,
	PostTitle,
} from './styles'

export const BlogPosts = () => {
	const {
		allContentfulPost: { edges },
	} = useStaticQuery(graphql`
		{
			allContentfulPost {
				edges {
					node {
						slug
						title
						date
						readingTime
						intro
					}
				}
			}
		}
	`)

	return (
		<Wrapper id="blog" as={Container}>
			{edges
				.slice(0, 2)
				.map(({ node: { slug, title, date, readingTime, intro } }) => (
					<Details key={slug}>
						<AniLink paintDrip hex="#2ecc71" to={`/blog/${slug}/`}>
							<PostTitle>{title}</PostTitle>
						</AniLink>
						<div>
							<PostDate>Posted on {date}</PostDate>
							<ReadingTime>Reading time: {readingTime} min</ReadingTime>
						</div>
						<ReactMarkdown source={intro} />
						<AniLink paintDrip hex="#2ecc71" to={`/blog/${slug}/`}>
							<Button>Read more »</Button>
						</AniLink>
					</Details>
				))}
		</Wrapper>
	)
}
