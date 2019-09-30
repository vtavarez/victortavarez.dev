import styled from 'styled-components'

export const Wrapper = styled.div`
	position: relative;
	z-index: 2;
	padding: 4rem 0;
	display: flex;
	align-items: center;
	justify-content: center;

	@media (max-width: 960px) {
		flex-direction: column;
		z-index: 1;
	}
`

export const Article = styled.div`
	min-height: 870px;
`

export const Details = styled.div`
	@media (max-width: 960px) {
		padding-right: unset;
		width: 100%;
		order: 1;
	}

	h1 {
		margin-bottom: 1rem;
		font-size: 22pt;
		color: #212121;

		@media (max-width: 620px) {
			font-size: 17pt;
		}
	}

	p {
		margin: 1.2rem 0;
		font-size: 16pt;
		font-weight: normal;
		color: #666666;
		word-spacing: 2px;

		@media (max-width: 620px) {
			font-size: 12pt;
		}
	}
`
export const PostInfo = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	margin-bottom: 2rem;
`

export const PostDate = styled.span`
	font-size: 14pt;
	color: #707070;
	padding-right: 5px;
	@media (max-width: 620px) {
		font-size: 12pt;
	}
`

export const ReadingTime = styled.span`
	font-size: 14pt;
	color: #707070;
	padding-left: 5px;
	@media (max-width: 620px) {
		font-size: 12pt;
	}
`
