import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import { Wrapper, Underline } from './styles'

const NavbarLinks = ({ desktop }) => (
  <Wrapper desktop={desktop}>
    {window !== 'undefined' && window.location.pathname === '/blog/' && (
      <>
        <AniLink paintDrip hex="#212121" to="/blog/tags/">
          <Underline desktop={desktop}>Tags</Underline>
        </AniLink>
      </>
    )}
    {window !== 'undefined' &&
      window.location.pathname.includes('/blog/') &&
      window.location.pathname.length > 6 && (
        <>
          <AniLink paintDrip hex="#212121" to="/blog/">
            <Underline desktop={desktop}>Blog</Underline>
          </AniLink>
        </>
      )}
    {window !== 'undefined' && window.location.pathname === '/' && (
      <>
        <AnchorLink offset="120" href="#projects">
          <Underline desktop={desktop}>Projects</Underline>
        </AnchorLink>
        <AnchorLink offset="210" href="#skills">
          <Underline desktop={desktop}>Skills</Underline>
        </AnchorLink>
        <AnchorLink offset="260" href="#blog">
          <Underline desktop={desktop}>Blog</Underline>
        </AnchorLink>
        <AnchorLink offset="140" href="#contact">
          <Underline desktop={desktop}>Contact</Underline>
        </AnchorLink>
      </>
    )}
  </Wrapper>
)

export default NavbarLinks
