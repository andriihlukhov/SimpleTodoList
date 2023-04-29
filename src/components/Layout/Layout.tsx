import React, { ReactNode } from 'react'

// CSS File
import './Layout.css'

type Props = {
	children: ReactNode | ReactNode[]
}

const Layout = ({children}: Props) => {
	return (
		<div className='layout'>
			{children}
		</div>
	)
}

export default Layout
