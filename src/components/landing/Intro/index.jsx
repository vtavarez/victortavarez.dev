import React, { useContext } from 'react'
import { Animated, FadeAnimations } from 'animated-styled-components'
import { Container } from 'Common'
import { Header } from 'Theme'
import devs from 'Static/illustrations/devs.jpg'
import AnimationContext from './context'
import Copy from './copy'
import {
	Wrapper,
	IntroWrapper,
	Details,
	AnimatedEmoji,
	Thumbnail,
} from './styles'

export const Intro = () => {
	const { animate } = useContext(AnimationContext)
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
						</Animated>
					) : (
						<h1>
							Hey there!{' '}
							<AnimatedEmoji>
								<span role="img" aria-label="waving emoji">
									👋🏽
								</span>
							</AnimatedEmoji>{' '}
							I’m Victor and I’m a Front-End Engineer!
						</h1>
					)}
					<Copy />
				</Details>
				<Thumbnail>
					<img src={devs} alt="devs collaborating on project" />
				</Thumbnail>
			</IntroWrapper>
		</Wrapper>
	)
}
