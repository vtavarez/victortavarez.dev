import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { Wrapper, Underline } from './styles'

const NavbarLinks = ({ desktop }) => (
	<Wrapper desktop={desktop}>
		<AnchorLink offset="50" href="#projects">
			<Underline desktop={desktop}>Projects</Underline>
		</AnchorLink>
		<AnchorLink offset="50" href="#blog">
			<Underline desktop={desktop}>Blog</Underline>
		</AnchorLink>
		<AnchorLink offset="50" href="#contact">
			<Underline desktop={desktop}>Contact</Underline>
		</AnchorLink>
	</Wrapper>
)

export default NavbarLinks
