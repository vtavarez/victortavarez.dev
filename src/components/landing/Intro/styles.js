import styled, { keyframes } from 'styled-components'

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100vh;
  max-height: 100vh;
  clip-path: polygon(0 0, 100% 0, 100% 90%, 0% 100%);

  &::after {
    content: ' ';
    position: absolute;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      to bottom right,
      rgba(46, 204, 113, 0.8),
      rgba(46, 138, 204, 0.8)
    );
    z-index: -1;
  }
`

export const Background = styled.canvas`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: -1;
  background-color: #212121;
`

export const Details = styled.div`
  flex: 3;
  h1 {
    @media (max-width: 620px) {
      font-size: 2.1rem;
    }
  }

  h2 {
    font-weight: normal;
    text-align: justify;
    @media (max-width: 620px) {
      font-size: 1.3rem;
    }
  }
`

const wave = keyframes`
	0% {
		transform: rotate(0deg);
	}

	50% {
		transform: rotate(20deg);
	}

	100% {
		transform: rotate(0deg);
	}
`

export const AnimatedEmoji = styled.div`
  animation-name: ${wave};
  animation-duration: 0.5s;
  animation-iteration-count: 3;
  animation-delay: 0.5s;
  display: inline-block;
  position: relative;
  width: 38px;
  height: 38px;

  img {
    position: absolute;
    width: 100%;
    height: 100%;
  }
`

const point = keyframes`
	0% {
		transform: translateY(0px);
  }
  
	50% {
		transform: translateY(15px);
  }
  
  100% {
    transform: translateY(0px);
  }
`

export const AnimatedArrow = styled.div`
  position: relative;
  align-self: center;
  width: 2px;
  height: 80px;
  background-color: #212121;
  animation-name: ${point};
  animation-duration: 1.5s;
  animation-iteration-count: infinite;
  top: 150px;
  ${({ animate }) => (animate ? `opacity: 0;` : `opacity: 1;`)}
  transition: opacity 0.5s ease-in;

  &::after {
    content: ' ';
    position: absolute;
    width: 10px;
    height: 10px;
    top: 80px;
    transform: translateX(-3px);

    background-color: inherit;
    clip-path: polygon(50% 100%, 0 0, 100% 0);
  }
`
