import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 300px;
`

export const Heading = styled.h3`
  position: relative;
  margin: 3rem 0;
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

export const FormWrapper = styled.div`
  width: 80%;

  @media (max-width: 960px) {
    width: 100%;
  }
`
