import React, { useState } from 'react'
import './App.css'
import Todo from './components/Todo'
import Form from './components/Form'


const App = () => {

    const [todos, setTodos] = useState(
      [
        {name: 'add first todo item', completed: false},
      ]
    )

  const addTodo = (todo) => {
    const newTodos = [...todos, {name: todo}]
    setTodos(newTodos)
  }

  const completeTodo = (index) => {
    const newTodos = [...todos]
    newTodos[index].completed = true
    setTodos(newTodos)
  }

    return (
      <div className='app'>
        <Form submit={addTodo} />
        <div className='todo-list'>
          {todos.map((item, index) => (
            <Todo 
              key={index} 
              todo={item} 
              index={index} 
              completeTodo={completeTodo} 
            />
          ))}       
        </div>      
      </div>
    )
}

export default App