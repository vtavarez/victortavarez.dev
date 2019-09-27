import React, { useContext } from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import Typing from 'react-typing-animation'
import AnimationContext from './context'

export default () => {
	const { animate, disableAnimate } = useContext(AnimationContext)

	if (animate) {
		return (
			<Typing startDelay={2000} speed={10} onFinishedTyping={disableAnimate}>
				<h4>
					Besides cooking up awesome UI's for clients! I also like to work on{' '}
					<AnchorLink offset="50" href="#projects">
						open source projects
					</AnchorLink>
					, <AnchorLink href="#blog">blog</AnchorLink> about current and
					upcoming technologies, and continuously expand my{' '}
					<AnchorLink href="#skills">skill set.</AnchorLink> Feel free to{' '}
					<AnchorLink href="#contact">get in touch.</AnchorLink>
				</h4>
			</Typing>
		)
	}
	return (
		<h4>
			Besides cooking up awesome UI's for clients! I also like to work on{' '}
			<AnchorLink offset="50" href="#projects">
				open source projects
			</AnchorLink>
			, <AnchorLink href="#blog">blog</AnchorLink> about current and upcoming
			technologies, and continuously expand my{' '}
			<AnchorLink href="#skills">skill set.</AnchorLink> Feel free to{' '}
			<AnchorLink href="#contact">get in touch.</AnchorLink>
		</h4>
	)
}
