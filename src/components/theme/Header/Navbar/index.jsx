import React from 'react'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import { Container } from 'Common'
import NavbarLinks from '../NavbarLinks'
import { Wrapper, Logo } from './styles'

const Navbar = ({ desktop }) => (
  <Wrapper as={Container}>
    <AniLink paintDrip hex="#212121" to="/">
      <Logo>V</Logo>
    </AniLink>
    <NavbarLinks desktop />
  </Wrapper>
)

export default Navbar
