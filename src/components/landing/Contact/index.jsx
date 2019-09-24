import React from 'react'
import { Container } from 'Common'
import clients from 'Static/illustrations/clients.jpg'
import { Wrapper, Details, Thumbnail } from './styles'
import ContactForm from './ContactForm'

export const Contact = () => (
	<Wrapper as={Container} id="contact">
		<Details>
			<ContactForm />
		</Details>
		<Thumbnail>
			<img src={clients} alt="clients emailing" />
		</Thumbnail>
	</Wrapper>
)
