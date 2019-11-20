import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 4rem 0;
  margin-bottom: 300px;
`

export const Articles = styled.div`
  min-height: 870px;
`

export const Details = styled.div`
  padding-right: 2rem;

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

export const Page = styled.h2`
  padding: 4rem 0;
`

export const Article = styled.div`
  margin-bottom: 2rem;
`

export const PostDate = styled.span`
  padding-right: 5px;
`

export const ReadingTime = styled.span`
  padding-left: 5px;
`
export const Title = styled.h3`
  position: relative;
  width: fit-content;
  cursor: pointer;

  a {
    color: #212121;
  }

  &::after {
    content: ' ';
    position: absolute;
    top: 30px;
    left: 0;
    right: 0;
    width: 100%;
    height: 5px;
    background-color: #2ecc71;
    visibility: hidden;
    transform: scaleX(0);
    transition: all 0.3s ease-in-out 0s;
    border-radius: 5px;
  }

  &:hover:after {
    visibility: visible;
    transform: scaleX(1);
  }
`
