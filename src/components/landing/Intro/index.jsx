import React from 'react'
import { Container } from 'Common'
import { Header } from 'Theme'
import devs from 'Static/illustrations/devs.jpg'
import Copy from './copy'
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
					<Copy />
				</Details>
				<Thumbnail>
					<img src={devs} alt="devs collaborating on project" />
				</Thumbnail>
			</IntroWrapper>
		</Wrapper>
	)
}
