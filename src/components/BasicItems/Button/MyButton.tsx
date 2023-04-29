import React, { Children, ReactNode } from 'react'

// CSS File
import './MyButton.css'

type Props = {
	children: ReactNode | ReactNode[]
	onClick: React.MouseEventHandler<HTMLButtonElement>
}

const Button = ({children, onClick}: Props) => {
	return (
		<div>
			<button className='myButton'
			onClick={onClick}
			>
				{children}
			</button>
		</div>
	)
}

export default Button
