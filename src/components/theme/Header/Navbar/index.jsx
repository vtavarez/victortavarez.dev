import React from 'react'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import { Container } from 'Common'
import NavbarLinks from '../NavbarLinks'
import { Wrapper, Emoji } from './styles'

const Navbar = ({ disableIntro }) => (
	<Wrapper as={Container}>
		<AniLink paintDrip hex="#FFFFFF" to="/">
			<Emoji>
				<span role="img" aria-label="Victor">
					👨🏽
				</span>
			</Emoji>
		</AniLink>
		<NavbarLinks desktop />
	</Wrapper>
)

export default Navbar
