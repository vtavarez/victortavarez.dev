import React from 'react'
import { Footer, Header } from 'Theme'
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
