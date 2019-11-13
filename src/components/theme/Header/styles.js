import styled from 'styled-components'

export const Wrapper = styled.div`
  position: relative;
  background: transparent;
  width: 100%;
  z-index: 2;

  &::after {
    content: ' ';
    position: absolute;
    height: 300px;
    z-index: -1;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-image: url('/illustrations/header-background.svg');
    background-size: contain;
    background-position: top left;
    background-repeat: no-repeat;
    transform: rotateY(180deg);

    @media (max-resolution: 150dpi) {
      @media (min-width: 2000px) {
        height: 400px;
      }
    }

    @media (max-width: 1024px) {
      height: 250px;
    }

    @media (max-width: 960px) {
      height: 150px;
    }

    @media (max-width: 680px) {
      height: 120px;
    }
  }
`

export const Overlay = styled.div`
  position: fixed;
  background: rgba(0, 0, 0, 0.7);
  width: 100%;
  height: 100%;
  display: none;
  transition: 0.4s;

  ${({ sidebar }) =>
    sidebar &&
    `
			display: block;
			z-index: 4;	
	`}
`
