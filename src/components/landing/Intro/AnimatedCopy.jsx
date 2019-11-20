import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import Typing from 'react-typing-animation'

export default ({ onFinishedTyping }) => (
  <Typing startDelay={2500} speed={70} onFinishedTyping={onFinishedTyping}>
    <h2>
      Front-end developer, passionate about delivering high quality, performant
      web applications to clients.
    </h2>
  </Typing>
)
