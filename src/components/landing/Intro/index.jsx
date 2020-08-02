import React, { useContext } from 'react'
import { Container } from 'Common'
import { Context } from 'State'
import Particles from 'react-particles-js'
import config from './particlesjs-config.json'
import Heading from './Heading'
import AnimatedCopy from './AnimatedCopy'
import Copy from './Copy'
import { Wrapper, Background, Details, AnimatedArrow } from './styles'
import { Header } from 'Theme'

export const Intro = () => {
  const {
    state: { animate },
    dispatch,
  } = useContext(Context)

  return (
    <Wrapper>
      <Background as={Particles} params={config} />
      <Header />
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
      <AnimatedArrow animate={animate} />
    </Wrapper>
  )
}
