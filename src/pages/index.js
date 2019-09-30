import React from 'react'
import { Layout, SEO } from 'Common'
import { Intro, Projects, Skills, Articles, Contact } from 'Components/landing'

window.sessionStorage.setItem('animate', 'true')

export default () => {
	return (
		<Layout>
			<SEO />
			<Intro />
			<Projects />
			<Skills />
			<Articles />
			<Contact />
		</Layout>
	)
}
