import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { Container, Button } from 'Common'
import skills from 'Static/illustrations/skills.jpg'
import { Wrapper, SkillsWrapper, Details, Thumbnail } from './styles'

export const Skills = () => (
	<Wrapper id="about">
		<SkillsWrapper as={Container}>
			<Thumbnail>
				<img src={skills} alt="devs using skills to solve problems" />
			</Thumbnail>
			<Details>
				<h1>Hi There!</h1>
				<p>
					Lorem Ipsum is simply dummy text of the printing and typesetting
					industry. Lorem Ipsum has been the industry’s standard dummy.
				</p>
				<Button as={AnchorLink} href="#contact">
					Get in touch
				</Button>
			</Details>
		</SkillsWrapper>
	</Wrapper>
)
