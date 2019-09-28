import styled from 'styled-components'

export const Wrapper = styled.div`
	display: flex;
	align-items: center;
`

export const FormWrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 4rem 0;

	@media (max-width: 960px) {
		flex-direction: column;
		padding: 2rem 0;
	}
`

export const Details = styled.div`
	flex: 1;

	@media (max-width: 960px) {
		padding-right: unset;
		width: 100%;
		order: 1;
	}

	h1 {
		margin-bottom: 2rem;
		font-size: 26pt;
		color: #212121;
	}

	p {
		margin-bottom: 2.5rem;
		font-size: 20pt;
		font-weight: normal;
		line-height: 1.3;
		color: #707070;
	}
`

export const Thumbnail = styled.div`
	flex: 1;

	@media (max-width: 960px) {
		width: 100%;
		margin-bottom: 2rem;
	}

	img {
		width: 100%;
	}
`
