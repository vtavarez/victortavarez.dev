import styled, { keyframes } from 'styled-components'

export const Wrapper = styled.div`
	position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
	height: 100vh;
	background-color: transparent;
	clip-path: polygon(0 0, 100% 0, 100% 90%, 0% 100%);

	&::before {
		content: ' ';
		position: absolute;
		top: 0;
		right 0;
		bottom: 0;
		left: 0;
		z-index: -1;
		background: linear-gradient(to bottom right, rgba(46,204,113,.5), rgba(39,174,96,.8), rgba(41,128,185,1));
	}
	
	&::after {
		content: ' ';
		position: absolute;
		top: 0;
		right 0;
		bottom: 0;
		left: 0;
		z-index: -2;
		background-image: url('../illustrations/header.gif');
		background-repeat: no-repeat;
		background-size: cover;
		background-position: center;
	}
`
export const Details = styled.div`
  h1 {
    @media (max-width: 620px) {
      font-size: 25pt;
    }
  }

  h2 {
    font-weight: normal;
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
  animation-delay: 1.5s;
  display: inline-block;
  position: relative;
  width: 35px;
  height: 38px;

  img {
    position: absolute;
    width: 100%;
    height: 100%;
  }
`
