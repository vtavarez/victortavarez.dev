import React from 'react'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import { Wrapper } from './styles'

const NavbarLinks = ({ desktop, disableIntro }) => (
	<Wrapper desktop={desktop}>
		<AniLink paintDrip color="rebeccapurple" to="/projects">
			Projects
		</AniLink>
		<AniLink paintDrip color="rebeccapurple" to="/blog">
			Blog
		</AniLink>
		<AniLink paintDrip color="rebeccapurple" to="/contact">
			Contact
		</AniLink>
	</Wrapper>
)

export default NavbarLinks
