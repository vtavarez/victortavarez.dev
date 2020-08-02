import React, { useReducer } from 'react'

export const Context = React.createContext()
const initialState = { animate: true }

const reducer = (state, action) => {
	switch (action.type) {
	case 'DISABLE_ANIMATION':
		return { ...state, animate: false }
	default:
		return state
	}
}

export const ContextProvider = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, initialState)
	const value = {
		state,
		dispatch,
	}
	return <Context.Provider value={value}>{children}</Context.Provider>
}
