import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import { Wrapper, Underline } from './styles'

const NavbarLinks = ({ desktop, blog, tags, tag, article }) => (
  <Wrapper desktop={desktop}>
    {blog && (
      <React.Fragment>
        <AniLink paintDrip hex="#2ecc71" to="/blog/tags/">
          <Underline desktop={desktop}>Tags</Underline>
        </AniLink>
      </React.Fragment>
    )}
    {tags && (
      <React.Fragment>
        <AniLink paintDrip hex="#2ecc71" to="/blog/">
          <Underline desktop={desktop}>Blog</Underline>
        </AniLink>
      </React.Fragment>
    )}
    {tag && (
      <React.Fragment>
        <AniLink paintDrip hex="#2ecc71" to="/blog/">
          <Underline desktop={desktop}>Blog</Underline>
        </AniLink>
        <AniLink paintDrip hex="#2ecc71" to="/blog/tags/">
          <Underline desktop={desktop}>Tags</Underline>
        </AniLink>
      </React.Fragment>
    )}
    {article && (
      <React.Fragment>
        <AniLink paintDrip hex="#2ecc71" to="/blog/">
          <Underline desktop={desktop}>Blog</Underline>
        </AniLink>
      </React.Fragment>
    )}
    {!blog && !tags && !tag && !article && (
      <React.Fragment>
        <AnchorLink offset="30" href="#projects">
          <Underline desktop={desktop}>Projects</Underline>
        </AnchorLink>
        <AnchorLink href="#skills">
          <Underline desktop={desktop}>Skills</Underline>
        </AnchorLink>
        <AnchorLink offset="90" href="#blog">
          <Underline desktop={desktop}>Blog</Underline>
        </AnchorLink>
        <AnchorLink offset="90" href="#contact">
          <Underline desktop={desktop}>Contact</Underline>
        </AnchorLink>
      </React.Fragment>
    )}
  </Wrapper>
)

export default NavbarLinks
