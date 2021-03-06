import React from 'react'
import { Layout, SEO } from 'Common'
import { Intro, Projects, Skills, Articles, Contact } from 'Components/landing'

export default () => {
  return (
    <Layout>
      <SEO />
      <Intro />
      <Skills />
      <Projects />
      <Articles />
      <Contact />
    </Layout>
  )
}
