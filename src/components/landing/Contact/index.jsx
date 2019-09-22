import React from 'react'
import { Container } from 'Common'
import { Wrapper, Details } from './styles'
import ContactForm from './ContactForm'

export const Contact = () => (
	<Wrapper as={Container} id="contact">
		<Details>
			<h4>Feel free to get in contact with me regarding</h4>
			<ContactForm />
		</Details>
	</Wrapper>
)
