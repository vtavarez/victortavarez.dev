import styled from 'styled-components'

export const Button = styled.button`
  position: relative;
  display: block;
  width: 167px;
  height: 45px;
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
  font-size: 14pt;
  font-weight: 600;
  text-align: center;
  box-sizing: border-box;
  padding: 10px 0;

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

  &:disabled {
    background: gray;
  }

  ${({ secondary }) =>
    secondary &&
    `
		background: #001F3F;
	`}
`
