import React from 'react'
import { Container } from 'Common'
import { Wrapper, Flex, Links, Details } from './styles'
import social from './social.json'
import poweredby from './poweredby.json'

export const Footer = () => (
	<Wrapper>
		<Flex as={Container}>
			<Details>
				<h2>Victor Tavarez</h2>
				<span>© All rights are reserved | {new Date().getFullYear()}</span>
				<Links>
					<span>Powered by </span>
					{poweredby.map(({ id, name, link, icon }) => (
						<a
							key={id}
							href={link}
							target="_blank"
							rel="noopener noreferrer"
							aria-label={`follow me on ${name}`}
						>
							<img height="24" src={icon} alt={name} />
						</a>
					))}
				</Links>
			</Details>
			<Links>
				{social.map(({ id, name, link, icon }) => (
					<a
						key={id}
						href={link}
						target="_blank"
						rel="noopener noreferrer"
						aria-label={`follow me on ${name}`}
					>
						<img width="24" src={icon} alt={name} />
					</a>
				))}
			</Links>
		</Flex>
	</Wrapper>
)
