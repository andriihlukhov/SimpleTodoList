import React, { useState } from 'react'

// Components
import TodoItem from '../TodoItem/TodoItem'

// CSS file
import './TodoList.css'

const TodoList = ({ todos, setTodos }) => {

	const [editableTodoId, setEditableTodoId] = useState(null)

	const lockTodo = (id) => {
		if (!id) {
			return
		}
		const newTodos = [...todos].map((item) => {
			if (item.id === id) {
				item.isCompleted = !item.isCompleted
			}
			return item
		})
		setTodos(newTodos)
	}

	const editTodo = (id) => {
		setEditableTodoId(id)
	}

	const saveTodo = (id, value) => {
		if (value === '') {
			alert('Field is empty, please write something')
			return
		}
		const newTodos = [...todos].map((item) => {
			if (item.id === id) {
				item.title = value
			}
			return item
		})
		setEditableTodoId(null)
		setTodos(newTodos)
	}
	
	const deleteTodo = (id) => {
		const newTodos = [...todos].filter((item) => item.id != id)
		setTodos(newTodos)
	}

	return (
		<div className='todoList'>
			{todos.map((item) => (
				<TodoItem key={item.id} item={item} inEditMode={editableTodoId && editableTodoId == item.id} onDelete={deleteTodo} onLock={lockTodo} onEdit={editTodo} onSave={saveTodo}/>
			))}
		</div>
	)
}

export default TodoList