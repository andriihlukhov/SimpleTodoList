import React, { useState } from 'react'
import './AddTodo.css'
import MyButton from '../BasicItems/Button/MyButton';
import MyInput from '../BasicItems/Input/MyInput';
import { SiAddthis } from 'react-icons/si'

const AddTodo = (props) => {

	const [value, setValue] = useState('')

	const submitValue = () => {
		props.onAdd(value)
		setValue('')
	}

	return (
		<div className='blockAddTodo'>
			<MyInput children={'Write task title'} onChange={(e) => setValue(e.target.value)} value={value} onKeyPress={(e) => {if (e.key ==='Enter') {submitValue()}}}/>
			<MyButton className='myButton' children={<SiAddthis color='white' size={30}/>} onClick={() => submitValue()}/>
		</div>
	)
}

export default AddTodo