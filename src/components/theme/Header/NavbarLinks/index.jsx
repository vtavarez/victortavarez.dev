import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { Wrapper, Underline } from './styles'

const NavbarLinks = ({ desktop }) => (
	<Wrapper desktop={desktop}>
		<AnchorLink offset="50" href="#projects">
			<Underline>Projects</Underline>
		</AnchorLink>
		<AnchorLink offset="50" href="#blog">
			<Underline>Blog</Underline>
		</AnchorLink>
		<AnchorLink offset="50" href="#contact">
			<Underline>Contact</Underline>
		</AnchorLink>
	</Wrapper>
)

export default NavbarLinks
