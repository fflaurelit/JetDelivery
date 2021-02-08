import React, { useState } from 'react'

const AppContext = React.createContext()

const AppProvider = ({ children }) => {
	const [user, setUser] = useState({})
	const [lang, setLang] = useState('en')
	return (
		<AppContext.Provider
			value={{ user, setUser, lang, setLang }}>
			{children}
		</AppContext.Provider>
	)
}

export { AppProvider, AppContext as default }
