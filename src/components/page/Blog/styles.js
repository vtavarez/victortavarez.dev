import styled from 'styled-components'

export const Wrapper = styled.div`
	padding-bottom: 4rem;
	display: flex;
	align-items: center;
	justify-content: center;

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

export const Post = styled.div`
	margin-bottom: 2rem;
`

export const Button = styled.button`
	position: relative;
	display: block;
	width: 162px;
	height: 40px;
	cursor: pointer;
	border: none;
	-webkit-appearance: none;
	-webkit-touch-callout: none;
	-webkit-user-select: none;
	-khtml-user-select: none;
	-moz-user-select: none;
	-ms-user-select: none;
	user-select: none;
	color: #212121;
	background: transparent;
	z-index: 2;
	font-size: 14pt;
	font-weight: 600;

	&::after {
		content: ' ';
		position: absolute;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		width: 100%;
		z-index: -1;
		background: rgba(46, 204, 113, 1);
		transform: rotate(2deg);
	}

	&:focus {
		outline: none;
	}

	&:disabled {
		background: gray;
	}

	${({ secondary }) =>
		secondary &&
		`
		background: #001F3F;
	`}
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

	&::after {
		content: ' ';
		position: absolute;
		bottom: 0;
		left: 0;
		right: 0;
		width: 100%;
		height: 5px;
		background-color: #212121;
		visibility: hidden;
		transform: scaleX(0);
		transition: all 0.3s ease-in-out 0s;
	}

	&:hover:after {
		visibility: visible;
		transform: scaleX(1);
	}
`
