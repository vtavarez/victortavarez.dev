import React from 'react'
import {
  Layout,
  SEO,
  Container,
  Article,
  PreviousNext,
  PageNumbering,
} from 'Common'
import { Animated, FadeAnimations } from 'animated-styled-components'
import { Header } from 'Theme'
import { Wrapper, Articles, Details, BlogImg } from 'Theme/Blog'

export default ({
  pageContext: { posts, numberBlogPages, currentPage, location },
}) => {
  return (
    <Layout>
      <SEO
        title="Blog | Victor Tavarez"
        description="Articles about current and upcoming web technologies."
        location={location}
      />
      <Header blog />
      <Wrapper as={Container}>
        <Animated
          animation={{
            delay_in: 1,
            in: FadeAnimations.FadeInTop,
            duration_in: 1,
          }}
        >
          <BlogImg />
        </Animated>
        <Articles>
          <Animated
            animation={{
              delay_in: 1.5,
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
            <PageNumbering numPages={numberBlogPages} location={location} />
          </Animated>
        </Articles>
      </Wrapper>
    </Layout>
  )
}
