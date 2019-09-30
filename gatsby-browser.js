import React from 'react'
import { ContextProvider } from './src/state/contextProvider'

export const wrapRootElement = ({ element }) => {
	return <ContextProvider>{element}</ContextProvider>
}

export const onServiceWorkerUpdateReady = () => window.location.reload(true)
