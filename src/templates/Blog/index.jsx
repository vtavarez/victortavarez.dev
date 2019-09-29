import React from 'react'
import {
	Layout,
	SEO,
	Container,
	Button,
	Tags,
	PreviousNext,
	PageNumbering,
} from 'Common'
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

export default ({
	pageContext: { posts, numberBlogPages, currentPage, location },
}) => {
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
						<PreviousNext
							numPages={numberBlogPages}
							currentPage={currentPage}
							location={location}
						/>
						<Details>
							{posts.map(
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
						<PageNumbering numPages={numberBlogPages} location={location} />
					</Animated>
				</Articles>
			</Wrapper>
		</Layout>
	)
}
