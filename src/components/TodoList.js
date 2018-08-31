import React, { Component } from 'react';
import { TodosConsumer } from './TodosProvider';

export default class TodoList extends Component {
  render() {
    return (
      <section className="main">
        <ul className="todo-list">
          <TodosConsumer>
            {todoProvider => (
              todoProvider.displayedTodos.map(todo => {
                return (
                  <li key={todo.id}>
                    <div className="view">
                      <input className="toggle" type="checkbox" checked={todo.isDone} onChange={() => todoProvider.toggleTodoStatus(todo.id) } />
                      <label>{todo.label}</label>
                      <button className="destroy" onClick={() => todoProvider.deleteTodo(todo.id)}></button>
                    </div>
                  </li>
                );
              })
            )}
          </TodosConsumer>
        </ul>
      </section>
    );
  }
}