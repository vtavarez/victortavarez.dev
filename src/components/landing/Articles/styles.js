import styled from 'styled-components'

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-evenly;
  flex-direction: column;
  margin: 4rem auto 0;
  min-height: 850px;
  clip-path: polygon(0 10%, 100% 0, 100% 90%, 0% 100%);
  background-image: linear-gradient(
      to bottom right,
      rgba(46, 204, 113, 1),
      rgba(46, 138, 204, 1),
      rgba(112, 46, 204, 0.9)
    ),
    url('../illustrations/programming.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  @media (max-width: 620px) {
    margin: 2rem auto;
  }
`

export const Heading = styled.h3`
  position: relative;
  margin: 0 auto 2rem;
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

export const Details = styled.div`
  display: flex;
  align-self: flex-start;
  align-items: flex-start;
  justify-content: space-between;

  @media (max-width: 960px) {
    flex-direction: column;
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
      padding: 0;
    }
  }

  p {
    margin: 1rem 0;
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
