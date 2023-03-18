import React, { useState } from 'react'
import s from './AddTodo.module.css'
import MyButton from '../BasicItems/Button/MyButton';
import MyInput from '../BasicItems/Input/MyInput';
import { SiAddthis } from 'react-icons/si'

const AddTodo = (props) => {

	return (
		<div className={s.addTodo}>
			<MyInput children={'Write task title'} onChange={(e) => props.setValue(e.target.value)} onKeyPress={(e) => e.key == 'Enter' ? props.onAdd(props.todos.id) : ''} value={props.value}/>
			<MyButton children={<SiAddthis size={30}/>} onClick={props.onAdd}/>
		</div>
	)
}

export default AddTodo