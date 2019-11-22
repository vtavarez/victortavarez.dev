import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import { Wrapper, Underline } from './styles'

const NavbarLinks = ({ desktop, blog, tags, tag, article }) => (
  <Wrapper desktop={desktop}>
    {blog && (
      <>
        <AniLink paintDrip hex="#212121" to="/blog/tags/">
          <Underline desktop={desktop}>Tags</Underline>
        </AniLink>
      </>
    )}
    {tags && (
      <>
        <AniLink paintDrip hex="#212121" to="/blog/">
          <Underline desktop={desktop}>Blog</Underline>
        </AniLink>
      </>
    )}
    {tag && (
      <>
        <AniLink paintDrip hex="#212121" to="/blog/">
          <Underline desktop={desktop}>Blog</Underline>
        </AniLink>
        <AniLink paintDrip hex="#212121" to="/blog/tags/">
          <Underline desktop={desktop}>Tags</Underline>
        </AniLink>
      </>
    )}
    {article && (
      <>
        <AniLink paintDrip hex="#212121" to="/blog/">
          <Underline desktop={desktop}>Blog</Underline>
        </AniLink>
      </>
    )}
    {!blog && !tags && !tag && !article && (
      <>
        <AnchorLink offset="80" href="#projects">
          <Underline desktop={desktop}>Projects</Underline>
        </AnchorLink>
        <AnchorLink offset="210" href="#skills">
          <Underline desktop={desktop}>Skills</Underline>
        </AnchorLink>
        <AnchorLink href="#blog">
          <Underline desktop={desktop}>Blog</Underline>
        </AnchorLink>
        <AnchorLink offset="70" href="#contact">
          <Underline desktop={desktop}>Contact</Underline>
        </AnchorLink>
      </>
    )}
  </Wrapper>
)

export default NavbarLinks
