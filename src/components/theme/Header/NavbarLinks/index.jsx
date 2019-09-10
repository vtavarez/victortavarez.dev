import React from 'react'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import { Wrapper, Link } from './styles'

const NavbarLinks = ({ desktop, disableIntro }) => (
	<Wrapper desktop={desktop}>
		<AniLink paintDrip hex="#2ecc71" to="/projects/">
			<Link>Projects</Link>
		</AniLink>
		<AniLink paintDrip hex="#2ecc71" to="/blog/">
			<Link>Blog</Link>
		</AniLink>
		<AniLink paintDrip hex="#2ecc71" to="/contact/">
			<Link>Contact</Link>
		</AniLink>
	</Wrapper>
)

export default NavbarLinks
