import React, { useState } from 'react'
import s from './AddTodo.module.css'
import MyButton from '../BasicItems/Button/MyButton';
import MyInput from '../BasicItems/Input/MyInput';
import { SiAddthis } from 'react-icons/si'

const AddTodo = (props) => {

	const [value, setValue] = useState('')


	return (
		<div className={s.addTodo}>
			<MyInput children={'Write task title'} onChange={(e) => setValue(e.target.value)} value={value} onKeyPress={(e) => e.key === 'Enter' ? props.onAdd(value) & setValue('') : ''}/>
			<MyButton className='ml-4' children={<SiAddthis size={30}/>} onClick={() => {props.onAdd(value), setValue('')}}/>
		</div>
	)
}

export default AddTodo