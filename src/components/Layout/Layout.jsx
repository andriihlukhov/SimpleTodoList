import React from 'react'

// CSS File
import './Layout.css'

const Layout = ({children}) => {
	return (
		<div className='layout'>
			{children}
		</div>
	)
}

export default Layout
