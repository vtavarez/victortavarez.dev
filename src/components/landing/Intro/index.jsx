import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import Typing from 'react-typing-animation'
import { Container } from 'Common'
import { Header } from 'Theme'
import devs from 'Static/illustrations/devs.jpg'
import {
	Wrapper,
	IntroWrapper,
	Details,
	AnimatedEmoji,
	Thumbnail,
} from './styles'

export const Intro = () => {
	return (
		<Wrapper>
			<Header />
			<IntroWrapper as={Container}>
				<Details>
					<h1>
						Hey there!{' '}
						<AnimatedEmoji>
							<span role="img" aria-label="waving emoji">
								👋🏽
							</span>
						</AnimatedEmoji>{' '}
						I’m Victor and I’m a Front-End Engineer!
					</h1>
					<Typing startDelay={2500} speed={20}>
						<h4>
							Besides cooking up awesome UI's for clients! I also like to work
							on{' '}
							<AnchorLink offset="50" href="#projects">
								open source projects
							</AnchorLink>
							, <AnchorLink href="#blog">blog</AnchorLink> about current and
							upcoming technologies, and continuously expand my{' '}
							<AnchorLink href="#skills">skill set.</AnchorLink> Feel free to{' '}
							<AnchorLink href="#contact">get in touch.</AnchorLink>
						</h4>
					</Typing>
				</Details>
				<Thumbnail>
					<img src={devs} alt="devs collaborating on project" />
				</Thumbnail>
			</IntroWrapper>
		</Wrapper>
	)
}
