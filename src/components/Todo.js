import React from 'react'
import { FaCheck } from 'react-icons/fa'

const Todo = (props) => {
    return (
        <div style={{textDecoration: props.todo.completed ? 'line-through' : ''}} className='todo'>
            {props.todo.name}
            <div>
                <button 
                    className='button' 
                    onClick={() => props.completeTodo(props.index)}
                >
                {props.todo.completed ? <FaCheck className='check'/> : 'Done'}
                </button>
            </div>
        </div>
    )
}

export default Todo
