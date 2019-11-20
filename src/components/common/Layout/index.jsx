import React from 'react'
import { Header, Footer } from 'Theme'
import { Global, Page } from './styles'
import './fonts.css'

export const Layout = ({ children }) => (
  <Page>
    <Global />
    <Header />
    {children}
    <Footer />
  </Page>
)
