import React, { useState } from 'react';
import './App.css'
import Form from './Form.js';

const Todo = (props) => {
  return (
    <div style={{ textDecoration: props.todo.complete ? 'line-through' : '' }} className='todo'>
      {props.todo.name}
      <div>
        <button onClick={() => props.completeTodo(props.index)}>Complete</button>
      </div>
    </div>
  )
}

const App = () => {
  const [todos, setTodos] = useState(
    [
      { name: 'Imparare React', complete: false },
      { name: 'Imparare Java', complete: false },
      { name: 'Imparare Phyton', complete: false }
    ]);


  const addTodo = (todo) => {
    const newTodos = [...todos, { name: todo }]
    setTodos(newTodos)
  }

  const completeTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].complete = true;

    setTodos(newTodos)
}
return (
  <div className="app">
    <div className="todo-list">
      {todos.map((item, index) => (
        <Todo key={index} todo={item} index={index} completeTodo={completeTodo} />
      ))}
      <Form submit={addTodo} />
    </div>
  </div>
)
}

export default App;
