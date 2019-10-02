import React from 'react'
import ReactMarkdown from 'react-markdown'
import { Layout, SEO, Container, Tags } from 'Common'
import { Animated, FadeAnimations } from 'animated-styled-components'
import { Header } from 'Theme'
import { DiscussionEmbed } from 'disqus-react'
import {
	Wrapper,
	Article,
	Details,
	PostInfo,
	ReadingTime,
	PostDate,
	Markdown,
} from 'Theme/Article'

export default ({
	pageContext: { slug, title, date, readingTime, content, tags, intro },
}) => {
	const disqusConfig = {
		shortname: process.env.GATSBY_DISQUS_NAME,
		config: { identifier: slug, title },
	}
	return (
		<Layout>
			<SEO
				title={`${title} | Victor Tavarez`}
				description={intro}
				location={`/blog/${slug}`}
			/>
			<Header article />
			<Wrapper as={Container}>
				<Article>
					<Animated
						animation={{
							delay_in: 0.7,
							in: FadeAnimations.FadeInTop,
							duration_in: 1,
						}}
					>
						<Details>
							<PostInfo>
								<h1>{title}</h1>
								<div>
									<PostDate>{date}</PostDate>
									<ReadingTime>Read time: {readingTime} min</ReadingTime>
								</div>
								<Tags tags={tags} />
							</PostInfo>
							<Markdown>
								<ReactMarkdown source={content} />
							</Markdown>
							<DiscussionEmbed {...disqusConfig} />
						</Details>
					</Animated>
				</Article>
			</Wrapper>
		</Layout>
	)
}
