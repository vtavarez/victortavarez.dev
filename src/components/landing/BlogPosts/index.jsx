import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { Container } from 'Common'
import ReactMarkdown from 'react-markdown'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import {
	Wrapper,
	Details,
	Post,
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
		<Wrapper as={Container}>
			<Details>
				{edges
					.slice(0, 3)
					.map(({ node: { slug, title, date, readingTime, intro } }) => (
						<Post key={slug}>
							<PostTitle>{title}</PostTitle>
							<div>
								<PostDate>Posted on {date}</PostDate>
								<ReadingTime>Reading time: {readingTime}min</ReadingTime>
							</div>
							<ReactMarkdown source={intro} />
							<AniLink paintDrip color="rebeccapurple" to={`/blog/${slug}/`}>
								<Button>Read more »</Button>
							</AniLink>
						</Post>
					))}
			</Details>
		</Wrapper>
	)
}
