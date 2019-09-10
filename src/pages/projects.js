import React from 'react'
import { Layout, SEO } from 'Common'
import { Projects } from 'Components/page'

export default () => (
	<Layout>
		<SEO
			title="Projects"
			description="A showcase of my recent projects, and experiments"
		/>
		<Projects />
	</Layout>
)
