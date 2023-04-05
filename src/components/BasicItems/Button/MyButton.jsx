import React, { Children } from 'react'

// CSS File
import './MyButton.css'

const Button = ({children, onClick}) => {
	return (
		<div>
			<button className='myButton'
			onClick={onClick}
			>
				{children}
			</button>
		</div>
	)
}

export default Button
