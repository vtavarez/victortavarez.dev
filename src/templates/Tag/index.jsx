import React from 'react'
import { Layout, SEO, Container, Button, Tags } from 'Common'
import ReactMarkdown from 'react-markdown'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import { Header } from 'Theme'
import {
	Wrapper,
	Details,
	Article,
	ReadingTime,
	PostDate,
	Title,
} from './styles'

export default ({ pageContext: { edges, tag } }) => {
	return (
		<Layout>
			<SEO />
			<Header hideLinks />
			<Wrapper as={Container}>
				<h1>{tag}</h1>
				<Details>
					{edges.map(
						({ node: { id, slug, title, date, readingTime, intro, tags } }) => (
							<Article key={id}>
								<Title>
									<AniLink paintDrip hex="#2ecc71" to={`/blog/${slug}/`}>
										{title}
									</AniLink>
								</Title>
								<div>
									<PostDate>Posted on {date}</PostDate>
									<ReadingTime>Reading time: {readingTime}min</ReadingTime>
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
							</Article>
						)
					)}
				</Details>
			</Wrapper>
		</Layout>
	)
}
