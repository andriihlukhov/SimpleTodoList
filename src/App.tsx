import React, {useState} from 'react'

// Components 
import Header from './components/Header/Header'
import AddTodo from './components/AddTodo/AddTodo'
import TodoList from './components/TodoList/TodoList'

// React Uuid
import uuid from 'react-uuid';

interface Todos {
	title: string
	id: string
	isCompleted: boolean
}

const App = () => {

	const [todos, setTodos] = useState<Todos[]>([
		{
			title: 'Task 1',
			id: "1",
			isCompleted: false
		},
		{
			title: 'Task 2',
			id: "2",
			isCompleted: false
		},
		{
			title: 'Task 3',
			id: "3",
			isCompleted: false
		},
	])

	const addTodo = (value: string) => {
		if (value == '') {
			alert('Field is empty, please write something')
			return
		}
		const newTodos: Todos[] = [{
			title: value,
			id: uuid(),
			isCompleted: false
		}, ...todos]
		setTodos(newTodos)
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