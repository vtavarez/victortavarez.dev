import React, { useContext } from 'react'
import { Container } from 'Common'
import { Context } from 'State'
import Heading from './Heading'
import AnimatedCopy from './AnimatedCopy'
import Copy from './Copy'
import { Wrapper, Introduction, Details, Thumbnail } from './styles'

export const Intro = () => {
  const {
    state: { animate },
    dispatch,
  } = useContext(Context)

  return (
    <Wrapper>
      <Container>
        <Details>
          {animate ? (
            <>
              <Heading />
              <AnimatedCopy
                onFinishedTyping={() => dispatch({ type: 'DISABLE_ANIMATION' })}
              />
            </>
          ) : (
            <>
              <Heading />
              <Copy />
            </>
          )}
        </Details>
      </Container>
    </Wrapper>
  )
}
