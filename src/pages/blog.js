import React from 'react'
import { Layout, SEO } from 'Common'
import { Blog } from 'Components/page'

export default () => (
	<Layout>
		<SEO title="Blog" description="Developer Blog" />
		<Blog />
	</Layout>
)
