import React from 'react'
import { Layout, SEO } from 'Common'
import { Contact } from '../components/page'

export default () => (
	<Layout>
		<SEO title="Contact" description="Get in touch." />
		<Contact />
	</Layout>
)
