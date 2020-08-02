import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import Typing from 'react-typing-animation'

export default ({ onFinishedTyping }) => (
  <Typing startDelay={2000} speed={70} onFinishedTyping={onFinishedTyping}>
    <h2>
      Full-stack developer, passionate about delivering high quality, performant
      web applications to clients.
    </h2>
  </Typing>
)
