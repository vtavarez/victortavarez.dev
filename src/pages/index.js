import React from 'react'
import { Layout, SEO } from 'Common'
import {
  Overlay,
  Intro,
  Projects,
  Skills,
  Articles,
  Contact,
} from 'Components/landing'

export default () => {
  return (
    <Layout>
      <SEO />
      <Overlay />
      <Intro />
      <Projects />
      <Skills />
      <Articles />
      <Contact />
    </Layout>
  )
}
