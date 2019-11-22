import styled from 'styled-components'

export const Wrapper = styled.div``

export const MetaData = styled.div`
  width: fit-content;
`

export const PostDate = styled.span`
  padding-right: 5px;
`

export const ReadingTime = styled.span`
  padding-left: 5px;
`

export const Image = styled.img`
  display: block;
  width: 350px;
  height: auto;
  box-shadow: 10px 11px 0 0 rgba(33, 33, 33, 1);
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
