import React, {useState} from 'react'
import Header from './components/Header/Header'
import AddTodo from './components/AddTodo/AddTodo'
import TodoList from './components/TodoList/TodoList'
import uuid from 'react-uuid';

const App = () => {

	const [todos, setTodos] = useState([
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

	const addTodo = (value) => {
		if (value == '') {
			return
		}
		const newTodo = [{
			title: value,
			id: uuid(),
			isCompleted: false
		}, ...todos]
		setTodos(newTodo)
	}

	return (
		<div>
			<Header/>
			<AddTodo onAdd={addTodo}/>
			<TodoList todos={todos} setTodos={setTodos}/>
		</div>
	)
}

export default App