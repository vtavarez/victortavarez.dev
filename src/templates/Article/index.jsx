import React from 'react'
import ReactMarkdown from 'react-markdown'
import { Layout, SEO, Container, Tags } from 'Common'
import { Header } from 'Theme'
import { Wrapper, Details, PostInfo, ReadingTime, PostDate } from './styles'

export default ({
	pageContext: { title, date, readingTime, content, tags },
}) => (
	<Layout>
		<SEO />
		<Header hideLinks />
		<Wrapper as={Container}>
			<Details>
				<PostInfo>
					<h1>{title}</h1>
					<div>
						<PostDate>Posted on: {date}</PostDate>
						<ReadingTime>Reading time: {readingTime}min</ReadingTime>
					</div>
					<Tags tags={tags} />
				</PostInfo>
			</Details>
		</Wrapper>
	</Layout>
)
