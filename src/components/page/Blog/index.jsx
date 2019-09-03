import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { Container } from 'Common'
import ReactMarkdown from 'react-markdown'
import { Wrapper, Details, Post, Button, ReadingTime, PostDate } from './styles'

export const Blog = () => {
	const {
		allContentfulPost: { edges },
	} = useStaticQuery(graphql`
		{
			allContentfulPost {
				edges {
					node {
						id
						title
						slug
						date
						readingTime
						intro
						content {
							content
						}
					}
				}
			}
		}
	`)

	console.log(edges)

	return (
		<Wrapper as={Container}>
			<Details>
				{edges.map(({ node: post }) => (
					<Post key={post.id}>
						<h1>{post.title}</h1>
						<div>
							<PostDate>Posted on {post.date}</PostDate>
							<ReadingTime>Reading time: {post.readingTime}min</ReadingTime>
						</div>
						<p>
							<ReactMarkdown source={post.intro} />
						</p>
						<Button>Read more »</Button>
					</Post>
				))}
			</Details>
		</Wrapper>
	)
}
