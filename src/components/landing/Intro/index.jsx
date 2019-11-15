import React, { useContext } from 'react'
import { Container } from 'Common'
import { Header } from 'Theme'
import devs from 'Static/illustrations/devs.jpg'
import { Context } from 'State'
import Heading from './Heading'
import AnimatedCopy from './AnimatedCopy'
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
        <Thumbnail>
          <img src={devs} alt="devs collaborating on project" />
        </Thumbnail>
      </IntroWrapper>
    </Wrapper>
  )
}
