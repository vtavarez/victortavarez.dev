import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import Typing from 'react-typing-animation'

export default ({ onFinishedTyping }) => (
  <Typing startDelay={3000} speed={70} onFinishedTyping={onFinishedTyping}>
    <h2>
      Front-end developer, passionate about delivering high quality, performant
      web applications.
    </h2>
  </Typing>
)
