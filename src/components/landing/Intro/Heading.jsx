import React from 'react'
import emoji from 'Static/illustrations/waving.png'
import { AnimatedEmoji } from './styles'

export default () => (
	<h1>
		Hey there,{' '}
		<AnimatedEmoji>
			<img src={emoji} alt="waving hand emoji" />
		</AnimatedEmoji>{' '}
		I’m Victor!
	</h1>
)
