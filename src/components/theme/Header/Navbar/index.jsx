import React from 'react'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import { Container } from 'Common'
import favicon from 'Static/favicon/favicon-512.png'
import NavbarLinks from '../NavbarLinks'
import { Wrapper, Avatar } from './styles'

const Navbar = props => (
	<Wrapper as={Container}>
		<AniLink paintDrip hex="#2ecc71" to="/">
			<Avatar src={favicon} alt="Victor" />
		</AniLink>
		<NavbarLinks desktop {...props} />
	</Wrapper>
)

export default Navbar
