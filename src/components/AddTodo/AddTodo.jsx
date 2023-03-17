import React, { useState } from 'react'
import s from './AddTodo.module.css'
import uuid from 'react-uuid';

const AddTodo = ({todo, setTodo}) => {

	const [value, setValue] = useState('')

	const addTodo = (id) => {
		if (value == '') {
			return
		}
		const newTodo = [...todo, {
			title: value,
			id: uuid(),
			isCompleted: false
		}]
		setValue('')
		setTodo(newTodo)
	}

	return (
		<div className={s.addTodo}>
			<input
			onKeyPress={(e) => e.key == 'Enter' ? addTodo(todo.id) : ''}
			onChange={(e) => setValue(e.target.value)}
			value={value} 
			className={s.addTodoInput}
			placeholder='Add a new task'/>
			<button onClick={() => addTodo(todo.id)} className={s.addTodoButton}>Add</button>
		</div>
	)
}

export default AddTodo
