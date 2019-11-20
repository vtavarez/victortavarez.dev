import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import technologies from './technologies.json'
import { Container, Button } from 'Common'
import { Wrapper, Details, Technologies } from './styles'

export const Skills = () => (
  <Wrapper id="skills" as={Container}>
    <Details>
      <h2>front end focused.. full stack experience</h2>
      <p>
        While I specialize in front-end development, I have experience working
        with engineering teams to solve complex problems through both front-end
        and back-end web technologies.
      </p>
      <Button as={AnchorLink} href="#contact">
        Get in touch
      </Button>
    </Details>
    <Technologies>
      {technologies.map(({ id, name, icon }) => (
        <img height="30" key={id} src={icon} alt={name} />
      ))}
    </Technologies>
  </Wrapper>
)
