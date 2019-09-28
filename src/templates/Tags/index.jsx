import React from 'react'
import { Layout, SEO, Container, Tags } from 'Common'
import { Animated, FadeAnimations } from 'animated-styled-components'
import { Header } from 'Theme'
import { Wrapper, TagsWrapper, Details, Page } from './styles'

export default ({ pageContext: { group: tags } }) => {
	return (
		<Layout>
			<SEO title="Tags | Victor Tavarez" description="Top article tags" />
			<Header hideLinks />
			<Wrapper as={Container}>
				<Animated
					animation={{
						delay_in: 0.7,
						in: FadeAnimations.FadeInTop,
						duration_in: 1,
					}}
				>
					<Page>Tags</Page>
				</Animated>
				<TagsWrapper>
					<Animated
						animation={{
							delay_in: 1,
							in: FadeAnimations.FadeInTop,
							duration_in: 1,
						}}
					>
						<Details>
							<Tags tags={tags} />
						</Details>
					</Animated>
				</TagsWrapper>
			</Wrapper>
		</Layout>
	)
}
