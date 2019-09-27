import React from 'react'

const context = {
	animate: true,
	disableAnimate() {
		context.animate = false
	},
}

export default React.createContext(context)
