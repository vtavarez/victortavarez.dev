import React from 'react'
import ReactMarkdown from 'react-markdown'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import {
  Wrapper,
  Title,
  MetaData,
  PostDate,
  ReadingTime,
  Image,
} from './styles'
import { Button, Tags } from 'Common'

export const Article = ({
  slug,
  title,
  date,
  readingTime,
  intro,
  tags,
  imageSrc,
}) => (
  <Wrapper>
    <Image src={imageSrc} alt={title} />
    <Title>
      <AniLink paintDrip hex="#212121" to={`/blog/${slug}/`}>
        {title}
      </AniLink>
    </Title>
    <MetaData>
      <PostDate>Post date: {date}</PostDate>
      <ReadingTime>Read time: {readingTime} min</ReadingTime>
    </MetaData>
    <ReactMarkdown source={intro} />
    <Button as={AniLink} paintDrip hex="#212121" to={`/blog/${slug}/`}>
      Read more »
    </Button>
    <Tags tags={tags} />
  </Wrapper>
)
