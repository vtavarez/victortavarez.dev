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

export const Articles = styled.div`
	min-height: 870px;
`

export const Details = styled.div`
	padding-right: 2rem;

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
			margin-bottom: 0;
			font-size: 17pt;
		}
	}

	p {
		margin: 1.2rem 0;
		font-weight: normal;
		color: #666666;
		word-spacing: 2px;
		font-size: 1.2rem;
	}
`

export const Article = styled.div`
	margin-bottom: 2rem;
`

export const PostDate = styled.span`
	color: #707070;
	padding-right: 5px;
	font-size: 1.2rem;
`

export const ReadingTime = styled.span`
	color: #707070;
	padding-left: 5px;
	font-size: 1.2rem;
`
export const Title = styled.h2`
	position: relative;
	width: fit-content;
	cursor: pointer;

	a {
		color: #212121;
	}

	&::after {
		content: ' ';
		position: absolute;
		top: 30px;
		left: 0;
		right: 0;
		width: 100%;
		height: 5px;
		background-color: #2ecc71;
		visibility: hidden;
		transform: scaleX(0);
		transition: all 0.3s ease-in-out 0s;
		z-index: -1;
	}

	&:hover:after {
		visibility: visible;
		transform: scaleX(1);
	}
`

export const Thumbnail = styled.div`
	width: 100%;
	max-width: 170px;
	margin-bottom: 40px;

	@media (max-width: 960px) {
		width: 100%;
		margin-bottom: 0;
	}
	@media (max-width: 620px) {
		max-width: 120px;
	}
	img {
		width: 100%;
	}
`
