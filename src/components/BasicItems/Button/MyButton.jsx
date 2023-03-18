import React, { Children } from 'react'
import s from './MyButton.module.css'

const Button = ({children, onClick, className}) => {
	return (
		<div>
			<button className={s.iconButton}
			onClick={onClick}
			>
				{children}
			</button>
		</div>
	)
}

export default Button
