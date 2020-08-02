import styled from 'styled-components'

export const Wrapper = styled.div`
  ${({ desktop }) =>
    desktop
      ? `
			@media (max-width: 960px) {
					display: none;
			}

			a {
          margin-right: 1rem;
          
					&:last-child {
							margin-right: unset;
					}
			}
		`
      : `
			position: relative;
			top: 50%;
			margin-top: -140px;
			padding: 3rem;
			display: flex;
			flex-direction: column;

			a {
					margin-bottom: 2rem;
					font-size: 14pt;
          text-align: center;

					&:last-child {
							margin-bottom: unset;
					}
			}
	`}
`

export const Underline = styled.div`
  display: inline-block;
  position: relative;
  width: fit-content;
  cursor: pointer;
  vertical-align: center;
  color: #212121;

  &::after {
    content: ' ';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 5px;
    visibility: hidden;
    transform: scaleX(0) translateY(8px);
    transition: all 0.3s ease-in-out 0s;
    border-radius: 5px;
    background-color: rgba(46, 204, 113, 1);
  }

  &:hover:after {
    visibility: visible;
    transform: scaleX(1) translateY(8px);
  }
`
