import React, { Children } from 'react'
import s from './MyButton.module.css'

const Button = ({children, onClick}) => {
	return (
		<div>
			<button className={s.myButton}
			onClick={onClick}
			>
				{children}
			</button>
		</div>
	)
}

export default Button
