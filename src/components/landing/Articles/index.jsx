import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { Container, Button, Tags } from 'Common'
import ReactMarkdown from 'react-markdown'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import {
	Wrapper,
	ArticlesWrapper,
	Details,
	ReadingTime,
	PostDate,
	PostTitle,
} from './styles'

export const Articles = () => {
	const {
		allContentfulPost: { edges },
	} = useStaticQuery(graphql`
		{
			allContentfulPost(sort: { fields: date, order: DESC }) {
				edges {
					node {
						slug
						title
						date
						readingTime
						intro
						tags
					}
				}
			}
		}
	`)

	return (
		<Wrapper as={Container}>
			<ArticlesWrapper id="blog">
				{edges
					.slice(0, 2)
					.map(({ node: { slug, title, date, readingTime, intro, tags } }) => (
						<Details key={slug}>
							<PostTitle>
								<AniLink paintDrip hex="#2ecc71" to={`/blog/${slug}/`}>
									{title}
								</AniLink>
							</PostTitle>
							<div>
								<PostDate>Posted on {date}</PostDate>
								<ReadingTime>Reading time: {readingTime} min</ReadingTime>
							</div>
							<ReactMarkdown source={intro} />
							<Button
								as={AniLink}
								paintDrip
								hex="#2ecc71"
								to={`/blog/${slug}/`}
							>
								Read more »
							</Button>
							<Tags tags={tags} />
						</Details>
					))}
			</ArticlesWrapper>
			<Button as={AniLink} paintDrip hex="#2ecc71" to="/blog/">
				More Posts »
			</Button>
		</Wrapper>
	)
}
