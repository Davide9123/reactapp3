import React from 'react';
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

class App extends React.Component {
  state = {
    todos: [
      { name: 'Imparare React', complete: false },
      { name: 'Imparare Java', complete: false },
      { name: 'Imparare Phyton', complete: false }
    ],
  }
  addTodo = (todo) => {
    const newTodos = [...this.state.todos, { name: todo }]
    this.setState({
      todos: newTodos
    })
  }
  completeTodo = (index) => {
    const newTodos = [...this.state.todos];
    newTodos[index].complete = true;

    this.setState({
      todos: newTodos
    })

  }
  render() {
    return (
      <div className="app">
        <div className="todo-list">
          {this.state.todos.map((item, index) => (
            <Todo key={index} todo={item} index={index} completeTodo={this.completeTodo} />
          ))}
          <Form submit={this.addTodo} />
        </div>
      </div>
    )
  }
}

export default App;
