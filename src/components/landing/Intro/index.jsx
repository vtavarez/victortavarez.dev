import React, { useContext } from 'react'
import { Container } from 'Common'
import { Header } from 'Theme'
import devs from 'Static/illustrations/devs.jpg'
import { Context } from 'State'
import Heading from './Heading'
import TypingCopy from './TypingCopy'
import Copy from './Copy'
import { Wrapper, IntroWrapper, Details, Thumbnail } from './styles'

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
						<React.Fragment>
							<Heading />
							<TypingCopy
								onFinishedTyping={() => dispatch({ type: 'DISABLE_ANIMATION' })}
							/>
						</React.Fragment>
					) : (
						<React.Fragment>
							<Heading />
							<Copy />
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
