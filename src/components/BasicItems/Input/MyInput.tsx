import React, { Children } from 'react'

// CSS File
import './MyInput.css'

type Props = {
	value: string
	children: string
	onChange: React.ChangeEventHandler<HTMLInputElement>
	onKeyPress: React.KeyboardEventHandler<HTMLInputElement>
}

const MyInput = ({value, children, onChange, onKeyPress}: Props) => {
	return (
		<div>
			<input
			onKeyPress={onKeyPress}
			onChange={onChange}
			value={value}
			className='myInput'
			placeholder={children}/>
		</div>
	)
}

export default MyInput



