import styled from 'styled-components'

export const Wrapper = styled.div`
	display: flex;
	align-items: flex-end;
	margin-top: auto;
	background-image: url('/illustrations/footer-background.svg');
	background-size: contain;
	background-position: bottom right;
	background-repeat: no-repeat;
	height: 300px;

	@media (max-width: 1024px) {
		padding-bottom: 25px;
	}

	@media (max-width: 960px) {
		padding-bottom: 5px;
	}

	@media (max-width: 680px) {
		padding-bottom: 10px;
		background-position: bottom;
		background-size: contain;
	}
`

export const Flex = styled.div`
	display: flex;
	align-items: flex-end;
	justify-content: space-between;
	padding-bottom: 4rem;

	@media (max-width: 680px) {
		flex-direction: column;
		text-align: center;
		align-items: center;
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
