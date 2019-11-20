import styled from 'styled-components'

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  margin: 4rem auto;
  min-height: 700px;
  clip-path: polygon(0 10%, 100% 0, 100% 90%, 0% 100%);
  background-image: linear-gradient(
      to bottom right,
      rgba(46, 204, 113, 1),
      rgba(39, 174, 96, 0.95),
      rgba(41, 128, 185, 0.9)
    ),
    url('../illustrations/programming.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  @media (max-width: 620px) {
    margin: 2rem auto;
  }

  @media (min-width: 1900px) {
    min-height: 800px;
  }
`

export const Heading = styled.h3`
  position: relative;
  margin: 3rem auto;
  width: fit-content;
  &::after {
    content: ' ';
    position: absolute;
    top: 35px;
    left: 0;
    height: 5px;
    width: 50px;
    background-color: rgba(46, 204, 113, 1);
    border-radius: 5px;
  }
`

export const ArticlesWrapper = styled.div`
  display: flex;
  align-self: flex-start;
  align-items: flex-start;
  justify-content: space-between;

  @media (max-width: 960px) {
    flex-direction: column;
    padding: 2rem 0;
  }

  @media (max-width: 620px) {
    padding: 0;
  }
`

export const Details = styled.div`
  flex: 1;

  @media (max-width: 960px) {
    padding-right: unset;
    width: 100%;
    order: 1;
    padding: 2rem 0;
  }

  h1 {
    margin-bottom: 1rem;
    font-size: 22pt;
    color: #212121;

    @media (max-width: 620px) {
      margin-bottom: 0;
      font-size: 17pt;
    }
  }

  p {
    margin: 1rem 0;
  }
`
export const PostDate = styled.span`
  padding-right: 5px;
`

export const ReadingTime = styled.span`
  padding-left: 5px;
`
export const PostTitle = styled.h3`
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
    background-color: rgba(46, 204, 113, 1);
    visibility: hidden;
    transform: scaleX(0);
    transition: all 0.3s ease-in-out 0s;
    z-index: -1;
    border-radius: 5px;
  }

  &:hover:after {
    visibility: visible;
    transform: scaleX(1);
  }
`

export const MorePosts = styled.button`
  margin-left: auto;
  padding: 0;

  a {
    display: inline-block;
    width: 100%;
    height: 100%;
    color: #212121;
    padding: 10px 0;
  }
`
