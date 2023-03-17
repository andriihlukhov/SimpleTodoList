import React from 'react'
import s from './Layout.module.css'

const Layout = ({children}) => {
	return (
		<div className={s.layout}>
			{children}
		</div>
	)
}

export default Layout
