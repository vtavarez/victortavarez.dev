import React from 'react'
import { Layout, SEO, Container, Button, Tags } from 'Common'
import { Animated, FadeAnimations } from 'animated-styled-components'
import ReactMarkdown from 'react-markdown'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import { Header } from 'Theme'
import blog from 'Static/illustrations/blog.svg'
import {
	Wrapper,
	Articles,
	Details,
	Article,
	ReadingTime,
	PostDate,
	Title,
	Thumbnail,
} from './styles'

export default ({ pageContext: { edges } }) => {
	return (
		<Layout>
			<SEO />
			<Header hideLinks />
			<Wrapper as={Container}>
				<Animated
					animation={{
						delay_in: 0.7,
						in: FadeAnimations.FadeInTop,
						duration_in: 1,
					}}
				>
					<Thumbnail>
						<img src={blog} alt="Blog" />
					</Thumbnail>
				</Animated>
				<Articles>
					<Animated
						animation={{
							delay_in: 1,
							in: FadeAnimations.FadeInTop,
							duration_in: 1,
						}}
					>
						<Details>
							{edges.map(
								({
									node: { id, slug, title, date, readingTime, intro, tags },
								}) => (
									<Article key={id}>
										<Title>
											<AniLink paintDrip hex="#2ecc71" to={`/blog/${slug}/`}>
												{title}
											</AniLink>
										</Title>
										<div>
											<PostDate>{date}</PostDate>
											<ReadingTime>Read time: {readingTime} min</ReadingTime>
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
					</Animated>
				</Articles>
			</Wrapper>
		</Layout>
	)
}
