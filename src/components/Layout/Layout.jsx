import React from 'react'
import './Layout.css'

const Layout = ({children}) => {
	return (
		<div className='myLayout'>
			{children}
		</div>
	)
}

export default Layout
