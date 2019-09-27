import React from 'react'
import { Footer } from 'Theme'
import { Global, Page } from './styles'
import './fonts.css'

export const Layout = ({ children }) => (
	<Page>
		<Global />
		{children}
		<Footer />
	</Page>
)
