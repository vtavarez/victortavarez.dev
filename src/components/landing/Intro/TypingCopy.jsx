import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import Typing from 'react-typing-animation'

export default ({ onFinishedTyping }) => (
  <Typing startDelay={3000} speed={70} onFinishedTyping={onFinishedTyping}>
    <h2>
      I'm a front-end developer, passionate about delivering high quality,
      performant web applications for clients. Feel free to{' '}
      <AnchorLink offset="90" href="#contact">
        get in touch.
      </AnchorLink>
    </h2>
  </Typing>
)
