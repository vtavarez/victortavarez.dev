import styled from 'styled-components'

export const Wrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	margin-top: -300px;
	transform: translateY(190px);

	@media (max-width: 960px) {
		flex-direction: column;
	}
`

export const Details = styled.div`
	padding-right: 2rem;
	width: 90%;

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
