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
import { Wrapper, Articles, Details, Page } from 'Theme/Tag'

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
                  node: {
                    id,
                    slug,
                    title,
                    date,
                    readingTime,
                    intro,
                    tags,
                    image: {
                      fluid: { src },
                    },
                  },
                }) => (
                  <Article
                    key={id}
                    slug={slug}
                    imageSrc={src}
                    title={title}
                    date={date}
                    readingTime={readingTime}
                    intro={intro}
                    tags={tags}
                  />
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
