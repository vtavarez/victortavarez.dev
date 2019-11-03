import styled from 'styled-components'

export const Wrapper = styled.div``

export const SkillsWrapper = styled.div`
	padding: 4rem 0;
	display: flex;
	align-items: center;
	justify-content: space-between;

	@media (max-width: 960px) {
		flex-direction: column;
		padding: 2rem 0;
	}
`

export const TechnologiesWrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	width: 400px;
	padding-bottom: 1rem;

	@media (max-width: 1024px) {
		width: 320px;
	}
`

export const Details = styled.div`
	flex: 1;
	padding-left: 2rem;

	@media (max-width: 960px) {
		padding-left: unset;
		width: 100%;
	}

	h1 {
		margin-bottom: 2rem;
		font-size: 26pt;
		color: #212121;

		@media (max-width: 620px) {
			font-size: 24pt;
		}
	}

	p {
		margin-bottom: 2.5rem;
		font-size: 21pt;
		font-weight: normal;
		line-height: 1.3;
		color: #707070;

		@media (max-width: 620px) {
			font-size: 19pt;
		}
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
