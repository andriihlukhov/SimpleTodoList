import React, { useState } from 'react'
import s from './TodoList.module.css'
import iconEdit from '../../edit.svg'
import iconDelete from '../../delete.svg'
import iconArrow from '../../arrow.svg'

const TodoList = ({ todo, setTodo }) => {
	const [edit, setEdit] = useState(null)
	const [value, setValue] = useState('')

	const deleteTodo = (id) => {
		const newTodo = [...todo].filter((item) => item.id != id)
		setTodo(newTodo)
	}

	const lockTodo = (id) => {
		const newTodo = [...todo].filter((item) => {
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
		const newTodo = [...todo].map((item) => {
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
			{todo.map((item) => (
				<div className={s.todoItem} key={item.id}>
					{edit == item.id ? (
						<div className={s.todoItemEditDiv}>
							<button className={s.lockButton}></button>
							<input
								onKeyPress={(e) => (e.key == 'Enter' ? saveTodo(item.id) : '')}
								className={s.editInput}
								placeholder={item.title}
								value={value}
								onChange={(e) => setValue(e.target.value)}
							/>
							<button onClick={() => saveTodo(item.id, item.title)}>
								<img src={iconArrow} />
							</button>
							<button
								onClick={() => deleteTodo(item.id)}
								className={s.iconDelete}
							>
								<img src={iconDelete} />
							</button>
						</div>
					) : (
						<div className={s.todoItemNoEdit}>
							{item.isCompleted ? (
								<div>
									<button
										onClick={() => lockTodo(item.id)}
										className={s.lockButtonLocked}
									></button>
								</div>
							) : (
								<div>
									<button
										onClick={() => lockTodo(item.id)}
										className={s.lockButton}
									></button>
								</div>
							)}
							<div className={s.mainTitle}>
								{item.isCompleted ? (
									<div className={s.mainTitleLocked}>{item.title}</div>
								) : (
									<div>{item.title}</div>
								)}
							</div>
							<div>
								<button onClick={() => editTodo(item.id, item.title)}>
									<img src={iconEdit} />
								</button>
								<button
									onClick={() => deleteTodo(item.id)}
									className={s.iconDelete}
								>
									<img src={iconDelete} />
								</button>
							</div>
						</div>
					)}
				</div>
			))}
		</div>
	)
}

export default TodoList
