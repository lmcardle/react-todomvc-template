import React, { Component } from 'react';
import { TodosConsumer } from './TodosProvider';

export default class TodoHeader extends Component {
  state = {
    newTodoLabel: ''
  }

  onTextChange = (event) => {
    this.setState({ newTodoLabel: event.target.value });
  }

  onKeyPress = (event) => {
    if (event.key === 'Enter') {

    }
  }

  render() {
    return (
      <header className="header">
        <h1>todos</h1>
        <TodosConsumer>
          { todosProvider => (
            <input className="new-todo" placeholder="What needs to be done?" autoFocus value={this.state.newTodoLabel} onChange={this.onTextChange} onKeyPress={(event) => {
              if (event.key === 'Enter') {
                todosProvider.addNewTodo(this.state.newTodoLabel);
                this.setState({ newTodoLabel: '' });
              }
            }} />
          )}
        </TodosConsumer>
      </header>
    );
  }
}