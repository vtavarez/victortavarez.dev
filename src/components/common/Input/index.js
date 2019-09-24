import styled from 'styled-components'

export const Input = styled.input`
	width: 100%;
	box-sizing: border-box;
	border: 2px solid transparent;
	padding: 0.8rem 1rem;
	margin-bottom: 0.5rem;
	transition: 0.3s;
	background-color: #ecf0f1;
	border-radius: 7px;

	${({ error }) =>
		error &&
		`
		border-color: #ff4136;
	`}

	&::placeholder {
		color: #6d6d6d;
	}
`
