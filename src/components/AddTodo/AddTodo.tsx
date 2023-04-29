import React, { useState } from 'react'

// Basic Items
import MyButton from '../BasicItems/Button/MyButton';
import MyInput from '../BasicItems/Input/MyInput';

// React Icons
import { SiAddthis } from 'react-icons/si'

// CSS File
import './AddTodo.css'

type Props = {
	onAdd: Function
}

const AddTodo = ({ onAdd }: Props) => {

	const [inputValue, setInputValue] = useState('')

	const submitValue = () => {
		onAdd(inputValue)
		setInputValue('')
	}

	return (
		<div className='addTodo'>
			<MyInput children={'Write task title'} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setInputValue(e.target.value)} value={inputValue} onKeyPress={(e: React.KeyboardEvent<HTMLInputElement>) => {if (e.key ==='Enter') {submitValue()}}}/>
			<MyButton children={<SiAddthis color='white' size={30}/>} onClick={() => submitValue()}/>
		</div>
	)
}

export default AddTodo