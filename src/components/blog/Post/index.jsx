import React from 'react'
import ReactMarkdown from 'react-markdown'
import { Layout, SEO, Container } from 'Common'
import { Header } from 'Theme'
import { Wrapper, Details, PostInfo, ReadingTime, PostDate } from './styles'

export default ({ pageContext: { title, date, readingTime, content } }) => (
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
				</PostInfo>
			</Details>
		</Wrapper>
	</Layout>
)
