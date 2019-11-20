import styled from 'styled-components'

export const Wrapper = styled.div`
  padding: 1.5rem 0;
  display: flex;
  align-items: center;
  justify-content: space-between;

  a {
    color: #212121;
  }
`

export const Logo = styled.h1`
  font-family: 'Wireframe';
  font-size: 3rem;
  margin-bottom: 0;

  @media (max-width: 620px) {
    font-size: 2.25rem;
  }
`
