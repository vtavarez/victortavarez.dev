import React from 'react'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import { Container } from 'Common'
import { Wrapper, Details, AnimatedEmoji } from './styles'

export const Landing = () => {
	return (
		<Wrapper as={Container}>
			<Details>
				<h1>
					Hello!{' '}
					<AnimatedEmoji>
						<span role="img" aria-label="waving emoji">
							👋🏽
						</span>
					</AnimatedEmoji>{' '}
					I’m Victor and I’m a Front-End Engineer!
				</h1>
				<h4>
					Besides cooking up super awesome{' '}
					<span role="img" aria-label="fire emoji">
						🔥
					</span>{' '}
					UI's for clients! I also like to work on{' '}
					<AniLink paintDrip hex="#2ecc71" to="/projects/">
						open source projects
					</AniLink>
					,{' '}
					<AniLink paintDrip hex="#2ecc71" to="/blog/">
						blog
					</AniLink>{' '}
					about{' '}
					<span role="img" aria-label="shiny emoji">
						✨
					</span>{' '}
					new frameworks and technologies, expand my current{' '}
					<AniLink paintDrip hex="#2ecc71" to="/skills/">
						skill set
					</AniLink>
					, and take long walks on the beach...jk{'  '}
					<span role="img" aria-label="crying emoji">
						😂
					</span>
					{'  '}
					Feel free to{' '}
					<AniLink paintDrip hex="#2ecc71" to="/contact/">
						get in touch.
					</AniLink>
				</h4>
			</Details>
		</Wrapper>
	)
}
