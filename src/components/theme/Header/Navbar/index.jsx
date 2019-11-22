import React from 'react'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import { Container } from 'Common'
import NavbarLinks from '../NavbarLinks'
import { Wrapper, Logo } from './styles'

const Navbar = ({ desktop, blog, tags, tag, article }) => (
  <Wrapper as={Container}>
    <AniLink paintDrip hex="#212121" to="/">
      <Logo />
    </AniLink>
    <NavbarLinks desktop blog={blog} tags={tags} tag={tag} article={article} />
  </Wrapper>
)

export default Navbar
