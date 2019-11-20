import styled from 'styled-components'

export const Wrapper = styled.div`
  margin: 8rem auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;

  @media (max-width: 960px) {
    margin: 2rem auto;
  }
`

export const Technologies = styled.div`
  flex: 1;
  min-width: 360px;
  display: flex;
  align-items: center;
  justify-content: space-around;

  img {
    margin: 1.4rem 0;
    transition: transform 0.2s ease-in;
  }

  img:nth-child(4) {
    height: 40px;
  }

  img:hover {
    transform: scale(3);
  }

  @media (max-width: 1024px) {
    justify-content: space-between;
    width: 100%;
  }
`

export const Details = styled.div`
  flex: 1;
  min-width: 360px;

  @media (max-width: 960px) {
    padding-left: unset;
    width: 100%;
  }

  h2 {
    text-transform: capitalize;
  }

  p {
    font-weight: normal;
    line-height: 1.3;
    color: #707070;
  }
`
