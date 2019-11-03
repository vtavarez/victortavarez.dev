import React, { useContext } from 'react'
import { Animated, FadeAnimations } from 'animated-styled-components'
import { Container } from 'Common'
import { Header } from 'Theme'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import Typing from 'react-typing-animation'
import devs from 'Static/illustrations/devs.jpg'
import emoji from 'Static/illustrations/waving.png'
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
								Hey there,{' '}
								<AnimatedEmoji>
									<img src={emoji} alt="waving hand emoji" />
								</AnimatedEmoji>{' '}
								I’m Victor!
							</h1>
							<Typing
								startDelay={3000}
								speed={70}
								onFinishedTyping={() => dispatch({ type: 'DISABLE_ANIMATION' })}
							>
								<h2>
									I'm a front-end developer, passionate about full-stack
									development with a focus on delivering high quality,
									performant web applications for clients. I enjoy contributing
									to free and{' '}
									<AnchorLink offset="50" href="#projects">
										open source projects
									</AnchorLink>
									, and sharing knowledge by{' '}
									<AnchorLink href="#blog">blogging</AnchorLink> about current
									and upcoming web technologies. Feel free to{' '}
									<AnchorLink href="#contact">get in touch.</AnchorLink>
								</h2>
							</Typing>
						</Animated>
					) : (
						<React.Fragment>
							<h1>
								Hey there,{' '}
								<AnimatedEmoji>
									<img src={emoji} alt="waving hand emoji" />
								</AnimatedEmoji>{' '}
								I’m Victor!
							</h1>
							<h2>
								I'm a front-end developer, passionate about full-stack
								development with a focus on delivering high quality, performant
								web applications for clients. I enjoy contributing to free and{' '}
								<AnchorLink offset="50" href="#projects">
									open source projects
								</AnchorLink>
								, and sharing knowledge by{' '}
								<AnchorLink href="#blog">blogging</AnchorLink> about current and
								upcoming web technologies. Feel free to{' '}
								<AnchorLink href="#contact">get in touch.</AnchorLink>
							</h2>
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
