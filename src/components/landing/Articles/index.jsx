import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { Container, Button, Tags } from 'Common'
import ReactMarkdown from 'react-markdown'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import {
  Wrapper,
  Heading,
  ArticlesWrapper,
  Details,
  ReadingTime,
  PostDate,
  PostTitle,
  MorePosts,
} from './styles'

export const Articles = () => {
  const {
    allContentfulPost: { edges },
  } = useStaticQuery(graphql`
    {
      allContentfulPost(sort: { fields: date, order: DESC }, limit: 2) {
        edges {
          node {
            slug
            title
            date(formatString: "MMMM Do, YYYY")
            readingTime
            intro
            tags
          }
        }
      }
    }
  `)

  return (
    <Wrapper>
      <Container>
        <Heading>Articles</Heading>
        <ArticlesWrapper id="blog">
          {edges.map(
            ({ node: { slug, title, date, readingTime, intro, tags } }) => (
              <Details key={slug}>
                <PostTitle>
                  <AniLink paintDrip hex="#212121" to={`/blog/${slug}/`}>
                    {title}
                  </AniLink>
                </PostTitle>
                <div>
                  <PostDate>Post date: {date}</PostDate>
                  <ReadingTime>Read time: {readingTime} min</ReadingTime>
                </div>
                <ReactMarkdown source={intro} />
                <Button
                  as={AniLink}
                  paintDrip
                  hex="#212121"
                  to={`/blog/${slug}/`}
                >
                  Read more »
                </Button>
                <Tags tags={tags} />
              </Details>
            )
          )}
        </ArticlesWrapper>
        <Button as={MorePosts}>
          <AniLink paintDrip hex="#212121" to="/blog/">
            More Posts »
          </AniLink>
        </Button>
      </Container>
    </Wrapper>
  )
}
