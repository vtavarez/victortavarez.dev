import styled from 'styled-components'

export const Wrapper = styled.div`
	position: relative;
	z-index: 2;
	padding: 4rem 0;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	@media (max-width: 960px) {
		z-index: 1;
	}
`

export const TagsWrapper = styled.div``

export const Details = styled.div`
	@media (max-width: 960px) {
		padding-right: unset;
		width: 100%;
		order: 1;
	}

	h1 {
		margin-bottom: 1rem;
		font-size: 20pt;
		color: #212121;
	}

	p {
		margin: 1.2rem 0;
		font-size: 12pt;
		font-weight: normal;
		color: #666666;
		word-spacing: 2px;
	}
`

export const Page = styled.h1`
	padding: 4rem 0;
`
