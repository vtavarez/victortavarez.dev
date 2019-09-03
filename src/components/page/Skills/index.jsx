import React from 'react'
import { Container } from 'Common'
import { Wrapper, SkillsWrapper, Details, Thumbnail } from './styles'

export const Skills = () => (
	<Wrapper id="about">
		<SkillsWrapper as={Container}>
			<Thumbnail />
			<Details />
		</SkillsWrapper>
	</Wrapper>
)
