import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 5.5rem;
  margin-bottom: 300px;
`

export const Articles = styled.div`
  min-height: 870px;
  margin-top: 4rem;
`

export const Details = styled.div`
  padding-right: 2rem;
  margin-bottom: 2rem;

  @media (max-width: 960px) {
    padding-right: unset;
    width: 100%;
    order: 1;
  }

  p {
    margin: 1rem 0;
    font-weight: normal;
  }
`
export const BlogImg = styled.div`
  width: 217px;
  height: 86px;
  background-image: url('../illustrations/blog.png');
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  margin: 0 auto;
`
