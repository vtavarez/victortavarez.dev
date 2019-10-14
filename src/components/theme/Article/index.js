import styled from 'styled-components'

export const Wrapper = styled.div`
	position: relative;
	padding: 4rem 0;
	z-index: 2;
	@media (max-width: 620px) {
		z-index: 1;
	}
`

export const Article = styled.div`
	min-height: 870px;
`

export const Details = styled.div`
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
			font-size: 14pt;
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

export const Markdown = styled.div`
	margin: 0 auto;
	padding-top: 2rem;
	padding-bottom: 4rem;
	max-width: 1200px;
	h1 {
		margin-bottom: 3rem;
	}

	h2 {
		margin: 3rem 0;
	}

	p {
		line-height: 1.5;
	}

	a {
		color: rgba(46, 204, 113, 1);
	}

	code {
		padding: 0.2em;
		font-size: 16pt;
		&::after {
			display: none;
		}
		@media (max-width: 620px) {
			font-size: 14pt;
		}
	}

	blockquote {
		margin-top: 2rem;
		margin-bottom: 2rem;
	}

	p {
		img {
			display: block;
			margin: 0 auto !important;
		}
	}

	@media (max-width: 1024px) {
		code {
			font-size: 12pt;
		}
	}
`
