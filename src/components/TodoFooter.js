import React, { Component } from 'react';
import TodosProvider, { TodosConsumer } from './TodosProvider';

export default class TodoFooter extends Component {
  todosRemaining = (todosProvider) => {
    return todosProvider.todos.filter(todo => todo.isDone === false).length;
  }

  render() {
    return (
      <TodosConsumer>
        {todosProvider => (
          <footer className="footer">
            <span className="todo-count"><strong>{this.todosRemaining(todosProvider)}</strong> item left</span>
            <ul className="filters">
              <li>
                <a className={todosProvider.filter === 'all' ? 'selected' : null} href="#/" onClick={todosProvider.showAll}>All</a>
              </li>
              <li>
                <a className={todosProvider.filter === 'active' ? 'selected' : null} href="#/active" onClick={todosProvider.showActive}>Active</a>
              </li>
              <li>
                <a className={todosProvider.filter === 'completed' ? 'selected' : null} href="#/completed" onClick={todosProvider.showCompleted}>Completed</a>
              </li>
            </ul>
            <button className="clear-completed" onClick={todosProvider.clearCompleted}>Clear completed</button>
          </footer>
        )}
      </TodosConsumer>
    );
  }
}