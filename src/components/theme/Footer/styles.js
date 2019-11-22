import styled from 'styled-components'

export const Wrapper = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  display: flex;
  align-items: flex-end;
  margin-top: auto;
  height: 300px;
  clip-path: polygon(0 30%, 100% 0, 100% 100%, 0 100%);
  background-image: linear-gradient(
    to bottom right,
    rgba(46, 204, 113, 1),
    rgba(46, 138, 204, 1),
    rgba(112, 46, 204, 1)
  );
`

export const Flex = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  transform: translateY(-2rem);

  @media (max-width: 960px) {
    transform: translateY(-2rem);
  }

  @media (max-width: 680px) {
    flex-direction: column;
    text-align: center;
    align-items: center;
  }
`

export const Links = styled.div`
  display: flex;
  align-items: center;

  a {
    margin: 0 0.5rem;

    img {
      margin: 0;
    }

    &:first-child,
    &:last-child {
      margin: 0;
    }
  }
`

export const Details = styled.div`
  h2 {
    margin-bottom: 10px;
  }

  div {
    margin-top: 10px;
  }

  @media (max-width: 680px) {
    padding-bottom: 2rem;

    div {
      justify-content: center;
    }
  }
`
