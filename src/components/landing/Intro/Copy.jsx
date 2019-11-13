import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'

export default () => (
	<h2>
		I'm a front-end developer, passionate about delivering high quality,
		performant web applications for clients. I enjoy contributing to free and{' '}
		<AnchorLink offset="50" href="#projects">
			open source projects
		</AnchorLink>
		, and sharing knowledge by <AnchorLink href="#blog">blogging</AnchorLink>{' '}
		about current and upcoming web technologies. Feel free to{' '}
		<AnchorLink href="#contact">get in touch.</AnchorLink>
	</h2>
)
