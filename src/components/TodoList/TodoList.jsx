import React, { useState } from 'react'
import TodoItem from '../TodoItem/TodoItem'

// CSS file
import './TodoList.css'

const TodoList = ({ todos, setTodo }) => {

	const [editableTodo, setEditableTodo] = useState(null)
	const [value, setValue] = useState('')

	const deleteTodo = (id) => {
		const newTodo = [...todos].filter((item) => item.id != id)
		setTodo(newTodo)
	}

	const lockTodo = (id) => {
		const newTodo = [...todos].filter((item) => {
			if (item.id == id) {
				item.isCompleted = !item.isCompleted
			}
			return item
		})
		setTodo(newTodo)
	}

	const editTodo = (id, title) => {
		setEditableTodo(id)
		setValue(title)
	}

	const saveTodo = (id, title) => {
		const newTodo = [...todos].map((item) => {
			if (item.id == id && value != '') {
				item.title = value
			}
			return item
		})
		setEditableTodo(null)
		setTodo(newTodo)
	}

	return (
		<div className='todoList'>
			{todos.map((item) => (
				<TodoItem key={item.id} value={value} item={item} inEditMode={editableTodo} setValue={setValue} onDelete={deleteTodo} onLock={lockTodo} onEdit={editTodo} onSave={saveTodo}/>
			))}
		</div>
	)
}

export default TodoList