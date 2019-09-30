import styled, { keyframes } from 'styled-components'

export const Wrapper = styled.div`
	@media (max-width: 960px) {
		min-height: 100vh;
	}
`

export const IntroWrapper = styled.div`
	padding: 10rem 0 4rem 0;
	display: flex;
	align-items: center;
	justify-content: space-between;

	@media (max-width: 1024px) {
		padding: 14rem 0 3rem 0;
	}

	@media (max-width: 960px) {
		flex-direction: column-reverse;
		padding: 4rem 0 3rem 0;
	}
`

export const Details = styled.div`
	flex: 1;

	@media (max-width: 960px) {
		width: 100%;
		margin-bottom: 2rem;
	}

	h1 {
		margin-bottom: 1rem;
		font-size: 38pt;
		color: #212121;

		@media (max-width: 1024px) {
			font-size: 34pt;
		}

		@media (max-width: 620px) {
			font-size: 24pt;
		}
	}

	h4 {
		margin-bottom: 2.5rem;
		font-size: 26pt;
		font-weight: normal;
		color: #707070;
		line-height: 1.3;

		@media (max-width: 1024px) {
			font-size: 24pt;
		}

		@media (max-width: 620px) {
			font-size: 19pt;
		}
	}

	a {
		position: relative;
		display: inline-block;
		color: #212121;
		z-index: 1;

		&::after {
			content: ' ';
			position: absolute;
			right: 0;
			left 0;
			top: 0;
			bottom: 0;
			transform: rotate(-1deg);
			background-color: #2ecc71;
			z-index: -1;
		}
	}
`

export const Thumbnail = styled.div`
	flex: 1;
	@media (max-width: 960px) {
		width: 100%;
	}
	img {
		width: 100%;
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
	animation-delay: 1s;
	display: inline-block;
`
