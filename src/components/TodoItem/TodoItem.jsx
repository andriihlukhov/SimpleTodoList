import React from 'react'

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


const TodoItem = ({onDelete, onLock, onEdit, onSave, item, value, inEditMode, setValue}) => {

	return (
		<div className='todoItem' key={item.id}>
			{
				inEditMode == item.id ? (
					<div className='todoItem-editMode'>
						<MyInput
			 				className='myInput'
			 					onChange={(e) => setValue(e.target.value)}
			 					value={value}
			 					onKeyPress={(e) =>
			 						e.key == 'Enter' ? onSave(item.id) : ''
			 					}
			 				/>
							<div className='blockWithButtons'>
				 				<MyButton
				 					onClick={() => onSave(item.id, item.title)}
				 					children={<img src={iconArrow} />}
				 				/>
				 				<MyButton
				 					onClick={() => onDelete(item.id)}
				 					children={<img src={iconDelete} />}
				 				/>
				 			</div>
					</div>
					) : (
						<div className='mainTodo'>
							<div className='lockButton'>
			 					<MyButton
			 						onClick={() => onLock(item.id)}
			 						children={
										item.isCompleted ? 
										<AiFillLock color={'red'} size={30} /> :
										<AiFillUnlock color={'green'} size={30} /> 
			 						}
			 					/>
							</div>
								<div className='todoTitle'>
										<div className={item.isCompleted ? 'titleLocked mainTitle' : 'mainTitle'}>{item.title}</div>
								</div>
								<div className='blockWithButtons'>
									<MyButton
										onClick={() => onEdit(item.id, item.title)}
										children={<img src={iconEdit} />}
									/>
									<MyButton
										onClick={() => onDelete(item.id)}
										children={<img src={iconDelete} />}
									/>
				 				</div>
						</div>
					)
			}
		</div>
	)
}

export default TodoItem
