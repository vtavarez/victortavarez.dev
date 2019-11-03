import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { Container, Button } from 'Common'
import skills from 'Static/illustrations/skills.jpg'
import technologies from './technologies.json'
import {
	Wrapper,
	SkillsWrapper,
	Details,
	Thumbnail,
	TechnologiesWrapper,
} from './styles'

export const Skills = () => (
	<Wrapper id="skills">
		<SkillsWrapper as={Container}>
			<Thumbnail>
				<img src={skills} alt="devs using skills to solve problems" />
			</Thumbnail>
			<Details>
				<h1>Hi There!</h1>
				<p>
					While I specialize in front-end development, I'm a multifaceted
					professional with 5+ years of experience assisting businesses to solve
					complex problems through both front-end and back-end web technologies.
					Below are a few of those technologies.
				</p>
				<TechnologiesWrapper>
					{technologies.map(({ id, name, icon }) => (
						<img height="30" key={id} src={icon} alt={name} />
					))}
				</TechnologiesWrapper>
				<Button as={AnchorLink} href="#contact">
					Get in touch
				</Button>
			</Details>
		</SkillsWrapper>
	</Wrapper>
)
