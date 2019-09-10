import styled, { keyframes } from 'styled-components'

export const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	height: 470px;

	&::after {
		content: ' ';
		position: absolute;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		background-image: url('../illustrations/landing-background.jpg');
		background-size: contain;
		background-position: right;
		background-repeat: no-repeat;
		opacity: 0.05;
		z-index: -1;
		transform: translateY(-50px);
	}
`

export const Details = styled.div`
	@media (max-width: 960px) {
		width: 100%;
		margin-bottom: 2rem;
	}

	h1 {
		margin-bottom: 1rem;
		font-size: 41pt;
		color: #212121;

		@media (max-width: 680px) {
			font-size: 24pt;
		}
	}

	h4 {
		margin-bottom: 2.5rem;
		font-size: 20pt;
		font-weight: normal;
		color: #212121;
		line-height: 1.3;

		@media (max-width: 680px) {
			font-size: 13pt;
		}
	}

	a {
		position: relative;
		display: inline-block;
		color: #212121;
		z-index: 2;

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
	animation-iteration-count: 5;
	animation-delay: 0.5s;
	display: inline-block;
`
