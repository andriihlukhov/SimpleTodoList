import React, { Children } from 'react'
import s from './MyInput.module.css'

const MyInput = ({value, children, onChange, onKeyPress}) => {
	return (
		<div>
			<input
			onKeyPress={onKeyPress}
			onChange={onChange}
			value={value}
			className={s.mainInputStyle}
			placeholder={children}/>
		</div>
	)
}

export default MyInput



