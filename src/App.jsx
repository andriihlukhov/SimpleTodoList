import React, { useState } from 'react'
import Header from './components/Header/Header'
import AddTodo from './components/AddTodo/AddTodo'
import TodoList from './components/TodoList/TodoList'

const App = () => {

	const [todo, setTodo] = useState([
		{
			title: 'Task 1',
			id: 1,
			isCompleted: false
		},
		{
			title: 'Task 2',
			id: 2,
			isCompleted: false
		},
		{
			title: 'Task 3',
			id: 3,
			isCompleted: false
		},
	])


	return (
		<div className='min-w-max'>
			<Header/>
			<AddTodo todo={todo} setTodo={setTodo}/>
			<TodoList todo={todo} setTodo={setTodo}/>
		</div>
	)
}

export default App
