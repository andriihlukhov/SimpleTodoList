import React, {useState} from 'react'
import Header from './components/Header/Header'
import AddTodo from './components/AddTodo/AddTodo'
import TodoList from './components/TodoList/TodoList'
import uuid from 'react-uuid';

const App = () => {

	const [todos, setTodo] = useState([
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

	const [value, setValue] = useState('')

	const addTodo = (id) => {
		if (value == '') {
			return
		}
			todos.push({
			title: value,
			id: uuid(),
			isCompleted: false
		})
		setValue('')
	}

	return (
		<div className='w-1/2'>
			<Header/>
			<AddTodo todos={todos} onAdd={addTodo} value={value} setValue={setValue}/>
			<TodoList todos={todos} setTodo={setTodo}/>
		</div>
	)
}

export default App