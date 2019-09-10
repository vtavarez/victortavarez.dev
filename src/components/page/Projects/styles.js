import styled from 'styled-components'

export const Wrapper = styled.div`
	position: relative;

	&::after {
		content: ' ';
		position: absolute;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		height: 700px;
		transform: translateY(-135px);
		background-image: url('../illustrations/projects-background.svg');
		background-size: contain;
		background-position: top right;
		background-repeat: no-repeat;
		z-index: -1;
		opacity: 0.05;
		margin-right: 30px;

		@media (max-width: 960px) {
			transform: translateY(-80px);
		}

		@media (max-width: 680px) {
			transform: translateY(-70px);
			margin-right: 0px;
		}
	}
`

export const Grid = styled.div`
	display: grid;
	align-items: center;
	grid-template-columns: repeat(3, 1fr);
	grid-template-rows: 8fr;
	gap: 1.2rem 1.2rem;

	@media (max-width: 960px) {
		grid-template-columns: repeat(2, 1fr);
	}

	@media (max-width: 680px) {
		grid-template-columns: 1fr;
	}
`

export const Item = styled.div`
	width: 100%;
	height: 100%;
	overflow: hidden;
	box-shadow: 0 1px 6px 0 rgba(0, 0, 0, 0.11);

	h4 {
		color: #212121;
	}

	p {
		color: #707070;
	}
`

export const Content = styled.div`
	padding: 1rem 0;
`

export const Stats = styled.div`
	display: flex;
	align-items: center;

	div {
		display: flex;
		&:first-child {
			margin-right: 0.5rem;
		}

		img {
			margin: 0;
		}

		span {
			color: #000;
			margin-left: 0.5rem;
		}
	}
`
