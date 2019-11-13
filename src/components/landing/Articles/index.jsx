import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { Container, Button, Tags } from 'Common'
import ReactMarkdown from 'react-markdown'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import {
  Wrapper,
  ArticlesHeader,
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
    <Wrapper as={Container}>
      <ArticlesHeader>Recent Articles</ArticlesHeader>
      <ArticlesWrapper id="blog">
        {edges.map(
          ({ node: { slug, title, date, readingTime, intro, tags } }) => (
            <Details key={slug}>
              <PostTitle>
                <AniLink paintDrip hex="#2ecc71" to={`/blog/${slug}/`}>
                  {title}
                </AniLink>
              </PostTitle>
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
            </Details>
          )
        )}
      </ArticlesWrapper>
      <Button as={AniLink} paintDrip hex="#2ecc71" to="/blog/">
        More Posts »
      </Button>
    </Wrapper>
  )
}
