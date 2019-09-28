import React from 'react'

const context = {
	animate: true,
	disableAnimation() {
		context.animate = false
	},
}

export default React.createContext(context)
