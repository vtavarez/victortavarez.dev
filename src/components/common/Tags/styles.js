import styled from 'styled-components'

export const Wrapper = styled.div`
	padding: 2rem 0;
	display: flex;
	align-items: center;
	justify-content: flex-start;
`

export const Tag = styled.button`
	position: relative;
	display: block;
	width: 100px;
	height: 25px;
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
	z-index: 1;
	font-size: 10pt;
	font-weight: 600;
	text-align: center;
	box-sizing: border-box;
	padding: 5px 0;

	&:nth-child(n + 2) {
		margin-left: 10px;
	}

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
	}
`
