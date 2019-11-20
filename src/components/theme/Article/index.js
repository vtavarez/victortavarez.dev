import styled from 'styled-components'

export const Wrapper = styled.div`
  padding: 4rem 0;
  margin-bottom: 300px;
`

export const Article = styled.div`
  min-height: 870px;
`

export const Details = styled.div`
  h1 {
    font-size: 20pt;

    @media (max-width: 620px) {
      font-size: 17pt;
    }
  }

  p {
    font-weight: normal;
  }
`
export const PostInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 4rem auto 2rem;
`

export const PostDate = styled.span`
  padding-right: 5px;
`

export const ReadingTime = styled.span`
  padding-left: 5px;
`

export const Markdown = styled.div`
  margin: 0 auto;
  padding-top: 2rem;
  padding-bottom: 4rem;
  max-width: 1200px;
  h1 {
    font-size: 20pt;
  }

  h2 {
    margin: 2rem 0;
    font-size: 17pt;
  }

  a {
    color: rgba(46, 204, 113, 1);
  }

  code {
    padding: 0.2em;
    font-size: 11pt;
    &::after {
      display: none;
    }
  }

  blockquote {
    margin-top: 2rem;
    margin-bottom: 2rem;
  }

  p {
    img {
      display: block;
      margin: 0 auto !important;
    }
  }

  @media (max-width: 1024px) {
    code {
      font-size: 12pt;
    }
  }
`
