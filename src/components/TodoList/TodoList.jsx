import React, { useState } from 'react'
import TodoItem from '../TodoItem/TodoItem'

// CSS file
import './TodoList.css'

const TodoList = ({ todos, setTodos }) => {

	const [editableTodoId, setEditableTodoId] = useState(null)

	const deleteTodo = (id) => {
		const newTodos = [...todos].filter((item) => item.id != id)
		setTodos(newTodos)
	}

	const lockTodo = (id) => {
		const newTodos = [...todos].filter((item) => {
			if (item.id == id) {
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
		const newTodos = [...todos].map((item) => {
			if (item.id == id && value != '') {
				item.title = value
			}
			return item
		})
		setEditableTodoId(null)
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