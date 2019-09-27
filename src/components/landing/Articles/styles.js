import styled from 'styled-components'

export const Wrapper = styled.div`
	display: flex;
	align-items: flex-end;
	justify-content: space-between;
	flex-direction: column;
`

export const ArticlesWrapper = styled.div`
	display: flex;
	align-self: flex-start;
	align-items: flex-start;
	justify-content: space-between;
	padding: 4rem 0;

	@media (max-width: 960px) {
		flex-direction: column-reverse;
		padding: 2rem 0;
	}
`

export const Details = styled.div`
	flex: 1;

	@media (max-width: 960px) {
		padding-right: unset;
		width: 100%;
		order: 1;
		padding: 2rem 0;
	}

	h1 {
		margin-bottom: 1rem;
		font-size: 20pt;
		color: #212121;
	}

	p {
		margin: 1.2rem 0;
		font-size: 14pt;
		font-weight: normal;
		color: #666666;
		word-spacing: 2px;
	}
`
export const PostDate = styled.span`
	font-size: 11pt;
	color: #707070;
	padding-right: 5px;
`

export const ReadingTime = styled.span`
	font-size: 11pt;
	color: #707070;
	padding-left: 5px;
`
export const PostTitle = styled.h1`
	position: relative;
	width: fit-content;
	height: 35px;
	cursor: pointer;

	a {
		color: #212121;
	}

	&::after {
		content: ' ';
		position: absolute;
		bottom: 0;
		left: 0;
		right: 0;
		width: 100%;
		height: 5px;
		background-color: #2ecc71;
		visibility: hidden;
		transform: scaleX(0);
		transition: all 0.3s ease-in-out 0s;
	}

	&:hover:after {
		visibility: visible;
		transform: scaleX(1);
	}
`
