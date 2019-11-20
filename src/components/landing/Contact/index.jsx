import React from 'react'
import { Container } from 'Common'
import { Wrapper, FormWrapper, Heading } from './styles'
import ContactForm from './ContactForm'

export const Contact = () => (
  <Wrapper id="contact" as={Container}>
    <Heading>Get In Touch</Heading>
    <FormWrapper>
      <ContactForm />
    </FormWrapper>
  </Wrapper>
)
