import React from 'react'
import { Layout, SEO } from 'Common'
import { Blog } from 'Components/page'

export default () => (
	<Layout>
		<SEO
			title="Blog"
			description="I created this blog to share things I've learned throughout my journey in Web Development. I cover a range of topics including Front-end Development, Frameworks, CSS, etc."
		/>
		<Blog />
	</Layout>
)
