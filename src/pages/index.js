import React from 'react'
import { Layout, SEO } from 'Common'
import { Intro, Projects, Skills, BlogPosts, Contact } from 'Components/landing'

export default () => (
	<Layout>
		<SEO />
		<Intro />
		<Projects />
		<Skills />
		<BlogPosts />
		<Contact />
	</Layout>
)
