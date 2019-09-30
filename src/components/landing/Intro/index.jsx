import React, { useContext } from 'react'
import { Animated, FadeAnimations } from 'animated-styled-components'
import { Container } from 'Common'
import { Header } from 'Theme'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import Typing from 'react-typing-animation'
import devs from 'Static/illustrations/devs.jpg'
import { Context } from 'State'
import {
	Wrapper,
	IntroWrapper,
	Details,
	AnimatedEmoji,
	Thumbnail,
} from './styles'

export const Intro = () => {
	const {
		state: { animate },
		dispatch,
	} = useContext(Context)
	return (
		<Wrapper>
			<Header />
			<IntroWrapper as={Container}>
				<Details>
					{animate ? (
						<Animated
							animation={{
								in: FadeAnimations.FadeInTop,
								duration_in: 1,
							}}
						>
							<h1>
								Hey there!{' '}
								<AnimatedEmoji>
									<span role="img" aria-label="waving emoji">
										👋🏽
									</span>
								</AnimatedEmoji>{' '}
								I’m Victor and I’m a Front-End Engineer!
							</h1>
							<Typing
								startDelay={3000}
								speed={100}
								onFinishedTyping={() => dispatch({ type: 'DISABLE_ANIMATION' })}
							>
								<h4>
									Besides cooking up awesome UI's for clients! I also like to
									work on{' '}
									<AnchorLink offset="50" href="#projects">
										open source projects
									</AnchorLink>
									, and <AnchorLink href="#blog">blog</AnchorLink> about current
									and upcoming web technologies. Feel free to{' '}
									<AnchorLink href="#contact">get in touch.</AnchorLink>
								</h4>
							</Typing>
						</Animated>
					) : (
						<React.Fragment>
							<h1>
								Hey there!{' '}
								<AnimatedEmoji>
									<span role="img" aria-label="waving emoji">
										👋🏽
									</span>
								</AnimatedEmoji>{' '}
								I’m Victor and I’m a Front-End Engineer!
							</h1>
							<h4>
								Besides cooking up awesome UI's for clients! I also like to work
								on{' '}
								<AnchorLink offset="50" href="#projects">
									open source projects
								</AnchorLink>
								, and <AnchorLink href="#blog">blog</AnchorLink> about current
								and upcoming web technologies. Feel free to{' '}
								<AnchorLink href="#contact">get in touch.</AnchorLink>
							</h4>
						</React.Fragment>
					)}
				</Details>
				<Thumbnail>
					<img src={devs} alt="devs collaborating on project" />
				</Thumbnail>
			</IntroWrapper>
		</Wrapper>
	)
}
