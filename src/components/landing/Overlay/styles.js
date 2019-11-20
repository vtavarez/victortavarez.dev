import styled, { keyframes } from 'styled-components'

export const Wrapper = styled.div`
  position: absolute;
  ${({ hide }) => (hide ? `display: none;` : `display: flex;`)}
  flex-direction: row;
  z-index: 99999;
  height: 100%;
  width: 100vw;
`

const collapse = keyframes`
	from {
    transform: scaleY(1);
  }

	to {
    transform: scaleY(0);
	}
`

export const Bar = styled.div`
  flex: 1;
  background-color: #212121;
  animation-name: ${collapse};
  animation-duration: 0.9s;
  animation-iteration-count: 1;
  animation-delay: 0.4s;
  transform-origin: bottom;
  animation-fill-mode: forwards;

  &:nth-child(2) {
    animation-delay: 0.6s;
  }

  &:nth-child(3) {
    animation-delay: 0.8s;
  }

  &:nth-child(4) {
    animation-delay: 1s;
  }
`
