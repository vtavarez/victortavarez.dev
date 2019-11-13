import styled from 'styled-components'

export const Wrapper = styled.div`
	display: flex;
	align-items: flex-end;
	justify-content: space-between;
	flex-direction: column;
`

export const ArticlesHeader = styled.h2`
	margin-right: auto;
`

export const ArticlesWrapper = styled.div`
	display: flex;
	align-self: flex-start;
	align-items: flex-start;
	justify-content: space-between;

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
		padding: 2rem 0;
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
export const PostTitle = styled.h2`
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
