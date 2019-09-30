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
import {
	Wrapper,
	Articles,
	Details,
	Page,
	Article,
	ReadingTime,
	PostDate,
	Title,
} from './styles'

export default ({
	pageContext: { posts, numberTagPages, currentPage, location, data: tag },
}) => {
	return (
		<Layout>
			<SEO
				title={`${tag[0].toUpperCase() +
					tag.slice(1)} Archives | Victor Tavarez`}
				description={`${tag[0].toUpperCase() + tag.slice(1)} article archives.`}
				location={location}
			/>
			<Header tag />
			<Wrapper as={Container}>
				<Animated
					animation={{
						delay_in: 0.7,
						in: FadeAnimations.FadeInTop,
						duration_in: 1,
					}}
				>
					<Page>{`{ tag: ${tag} }`}</Page>
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
							numPages={numberTagPages}
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
						<PageNumbering numPages={numberTagPages} location={location} />
					</Animated>
				</Articles>
			</Wrapper>
		</Layout>
	)
}
