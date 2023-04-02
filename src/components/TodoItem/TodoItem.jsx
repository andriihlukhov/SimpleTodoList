import React, { useState } from 'react'

// CSS File
import './TodoItem.css'

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

const TodoItem = ({ onDelete, onLock, onEdit, onSave, item, inEditMode }) => {
	const [value, setValue] = useState('')

	return (
		<div className='todoItem' key={item.id}>
			<div className='lockButton'>
				<MyButton
					onClick={() => onLock(item.id)}
					children={
						item.isCompleted ? 
							<AiFillLock color={'red'} size={30} /> 
							:
							<AiFillUnlock color={'green'} size={30} />
					}
				/>
			</div>
			{inEditMode ? (
				<div className='todoItem-editMode'>
					<MyInput
						className='myInput'
						onChange={(e) => setValue(e.target.value)}
						value={value}
						onKeyPress={(e) => (e.key == 'Enter' ? onSave(item.id, value) : '')}
					/>
					<MyButton
						onClick={() => onSave(item.id, value)}
						children={<img src={iconArrow} />}
					/>
				</div>
			) : (
				<div className='todoItem todoItem-initialMode'>
					<div className='todoTitle'>
						<div className={item.isCompleted ? 'titleLocked title' : 'title'}>
							{item.title}
						</div>
					</div>
					<div>
						<MyButton
							onClick={() => onEdit(item.id, setValue(item.title))}
							children={<img src={iconEdit} />}
						/>
					</div>
				</div>
			)}
			<MyButton
				onClick={() => onDelete(item.id)}
				children={<img src={iconDelete} />}
			/>
		</div>
	)
}

export default TodoItem
