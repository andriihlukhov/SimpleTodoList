import React, { useState } from 'react'

// CSS file
import s from './TodoList.module.css'

// Basic Components
import MyInput from '../BasicItems/Input/MyInput'
import MyButton from '../BasicItems/Button/MyButton'

// Icons
import iconEdit from '/public/edit.svg'
import iconDelete from '/public/delete.svg'
import iconArrow from '/public/arrow.svg'

// React Icons
import { AiFillLock } from 'react-icons/ai'
import { AiFillUnlock } from 'react-icons/ai'

const TodoList = ({ todos, setTodo }) => {
	const [inEditMode, setEdit] = useState(null)
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
		setEdit(id)
		setValue(title)
	}

	const saveTodo = (id, title) => {
		const newTodo = [...todos].map((item) => {
			if (item.id == id && value != '') {
				item.title = value
			}
			return item
		})
		setEdit(null)
		setTodo(newTodo)
	}

	return (
		<div className={s.todoList}>
			{todos.map((item) => (
				<div className={s.todoItem} key={item.id}>
					{inEditMode == item.id ? (
						<div className='flex justify-center items-center'>
							<div className='ml-11'>
								<MyInput
									onChange={(e) => setValue(e.target.value)}
									value={value}
									onKeyPress={(e) =>
										e.key == 'Enter' ? saveTodo(item.id) : ''
									}
								/>
							</div>
							<div className='flex'>
								<MyButton
									onClick={() => saveTodo(item.id, item.title)}
									children={<img src={iconArrow} />}
								/>
								<MyButton
									className={s.iconButton}
									onClick={() => deleteTodo(item.id)}
									children={<img src={iconDelete} />}
								/>
							</div>
						</div>
					) : (
						<div className={s.defaultTodo}>
							{item.isCompleted ? (
								<div>
									<MyButton
										onClick={() => lockTodo(item.id)}
										children={
											<AiFillUnlock className='text-red-500 mr-2' size={30} />
										}
									/>
								</div>
							) : (
								<div>
									<MyButton
										onClick={() => lockTodo(item.id)}
										children={
											<AiFillLock className='text-green-500 mr-2' size={30} />
										}
									/>
								</div>
							)}
							<div className={s.mainTitle}>
								{item.isCompleted ? (
									<div className={s.mainTitleLocked}>{item.title}</div>
								) : (
									<div>{item.title}</div>
								)}
							</div>
							<div className='flex'>
								<MyButton
									onClick={() => editTodo(item.id, item.title)}
									children={<img src={iconEdit} />}
								/>
								<MyButton
									onClick={() => deleteTodo(item.id)}
									children={<img src={iconDelete} />}
								/>
							</div>
						</div>
					)}
				</div>
			))}
		</div>
	)
}

export default TodoList
