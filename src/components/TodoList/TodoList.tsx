import React, { useState } from 'react'

// Components
import TodoItem from '../TodoItem/TodoItem'

// CSS file
import './TodoList.css'

interface Todos {
	title: string
	id: string
	isCompleted: boolean
}

type Props = {
	todos: Todos[]
	setTodos: Function
}

const TodoList = ({ todos, setTodos }: Props) => {

	const [editableTodoId, setEditableTodoId] = useState('')

	const lockTodo = (id: string) => {
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

	const editTodo = (id: string) => {
		setEditableTodoId(id)
	}

	const saveTodo = (id: string, value: string) => {
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
		setEditableTodoId('')
		setTodos(newTodos)
	}
	
	const deleteTodo = (id: string) => {
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