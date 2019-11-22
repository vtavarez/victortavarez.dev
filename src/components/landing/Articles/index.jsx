import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { Container, Button, Article } from 'Common'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import { Wrapper, Heading, Details, MorePosts } from './styles'

export const Articles = () => {
  const {
    allContentfulPost: { edges },
  } = useStaticQuery(graphql`
    {
      allContentfulPost(sort: { fields: date, order: DESC }, limit: 2) {
        edges {
          node {
            id
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
    <Wrapper id="blog">
      <Container>
        <Heading>Articles</Heading>
        <Details>
          {edges.map(
            ({ node: { id, slug, title, date, readingTime, intro, tags } }) => (
              <Article
                key={id}
                slug={slug}
                title={title}
                date={date}
                readingTime={readingTime}
                intro={intro}
                tags={tags}
              />
            )
          )}
        </Details>
        <Button as={MorePosts}>
          <AniLink paintDrip hex="#212121" to="/blog/">
            More Posts »
          </AniLink>
        </Button>
      </Container>
    </Wrapper>
  )
}
