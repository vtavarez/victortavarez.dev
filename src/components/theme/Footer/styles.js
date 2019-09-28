import styled from 'styled-components'

export const Wrapper = styled.div`
	position: relative;
	display: flex;
	align-items: flex-end;
	margin-top: auto;
	height: 300px;

	&::after {
		content: ' ';
		position: absolute;
		height: 300px;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		z-index: -1;
		background-image: url('/illustrations/footer-background.svg');
		background-size: contain;
		background-position: bottom right;
		background-repeat: no-repeat;
		transform: rotateY(180deg);

		@media (max-resolution: 150dpi) {
			@media (min-width: 2000px) {
				height: 400px;
			}
		}

		@media (max-width: 680px) {
			background-position: bottom;
			background-size: contain;
		}
	}
`

export const Flex = styled.div`
	display: flex;
	align-items: flex-end;
	justify-content: space-between;
	padding-bottom: 4rem;

	@media (max-resolution: 150dpi) {
		@media (min-width: 2000px) {
			padding-bottom: 0;
			transform: translateY(2rem);
		}
	}

	@media (max-width: 960px) {
		padding-bottom: 2rem;
	}

	@media (max-width: 680px) {
		flex-direction: column;
		text-align: center;
		align-items: center;
		padding-bottom: 6rem;
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
	@media (max-width: 680px) {
		margin-bottom: 2rem;
	}
`
