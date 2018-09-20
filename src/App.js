import React, { Component } from "react";
import Todos from "./todos";
import AddForm from "./AddTodo";
class App extends Component {
  state = {
    todos: [
      { id: 1, content: "Buy milk" },
      { id: 2, content: "doing nothing" },
      { id: 3, content: "Find something" }
    ]
  };
  deleteTodo = id => {
    const todos = this.state.todos.filter(todo => {
      return todo.id !== id;
    });

    this.setState({
      todos: todos
    });
  };
  AddTodo = newTodo => {
    newTodo.id = Math.random();

    let todos = [...this.state.todos, newTodo];
    this.setState({
      todos: todos
    });
  };
  render() {
    return (
      <div className="todo-app container">
        <h1 className="center blue-text">Todo's</h1>
        <Todos todos={this.state.todos} deleteTodo={this.deleteTodo} />
        <AddForm addTodo={this.AddTodo} />
      </div>
    );
  }
}

export default App;
