import styled from 'styled-components'

export const Wrapper = styled.div`
  position: relative;
  margin: 8rem auto;

  @media (max-width: 960px) {
    margin: 2rem auto;
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

export const Grid = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 8fr;
  gap: 1.2rem 1.2rem;

  @media (max-width: 960px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 680px) {
    grid-template-columns: 1fr;
  }
`

export const Item = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  box-shadow: 0 1px 6px 0 rgba(0, 0, 0, 0.11);
  transition: transform 0.2s ease-in-out;

  h4 {
    color: #212121;
  }

  p {
    color: #707070;
  }

  &:hover {
    transform: scale(1.2);
  }
`

export const Content = styled.div`
  padding: 1rem 0;
`

export const Stats = styled.div`
  display: flex;
  align-items: center;

  div {
    display: flex;
    &:first-child {
      margin-right: 0.5rem;
    }

    img {
      margin: 0;
    }

    span {
      color: #000;
      margin-left: 0.5rem;
    }
  }
`
