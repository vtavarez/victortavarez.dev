import React from 'react'
import { Container } from 'Common'
import clients from 'Static/illustrations/clients.jpg'
import {
  Wrapper,
  Details,
  Thumbnail,
  FormWrapper,
  ContactHeader,
} from './styles'
import ContactForm from './ContactForm'

export const Contact = () => (
  <React.Fragment>
    <ContactHeader>Get In Touch</ContactHeader>
    <Wrapper id="contact">
      <FormWrapper as={Container}>
        <Details>
          <ContactForm />
        </Details>
        <Thumbnail>
          <img src={clients} alt="clients emailing" />
        </Thumbnail>
      </FormWrapper>
    </Wrapper>
  </React.Fragment>
)
