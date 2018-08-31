import React, { Component } from 'react';

const initialProvierState = {
  todos: [
    {
      id: 1,
      label: 'Taste JavaScript',
      isDone: true
    },
    {
      id: 2,
      label: 'Buy a unicorn',
      isDone: false
    }
  ]
};

const { Provider, Consumer } = React.createContext(initialProvierState);
export const TodosConsumer = Consumer;

export default class TodosProvider extends Component {
  state = {
    todos: initialProvierState.todos,
    displayedTodos: initialProvierState.todos,
    filter: 'all'
  }

  componentDidMount() {
    const methodsToAttach = {
      addNewTodo: this.addNewTodo,
      clearCompleted: this.clearCompleted,
      deleteTodo: this.deleteTodo,
      showActive: this.showActive,
      showAll: this.showAll,
      showCompleted: this.showCompleted,
      toggleTodoStatus: this.toggleTodoStatus
    }
    this.setState({ ...this.state, ...methodsToAttach });
  }

  addNewTodo = (label) => {
    let todos = this.state.todos;
    let newTodo = { id: todos.length + 1, label, isDone: false }
    todos.push(newTodo);
    this.updateDisplayedTodos(this.state.filter, todos);
  }

  clearCompleted = () => {
    let todos = this.state.todos;
    let newTodos = todos.filter(todo => !todo.isDone);
    this.updateDisplayedTodos(this.state.filter, newTodos);
  }

  deleteTodo = (id) => {
    let todos = this.state.todos;
    let todo = todos.find(todo => todo.id === id);
    let todoIndex = todos.indexOf(todo);
    todos.splice(todoIndex, 1);
    this.updateDisplayedTodos(this.state.filter, todos);
  }

  showActive = () => {
    this.showFiltered('active');
  }

  showAll = () => {
    this.showFiltered('all');
  }

  showCompleted = () => {
    this.showFiltered('completed');
  }

  showFiltered(filter) {
    this.updateDisplayedTodos(filter, this.state.todos);
  }

  toggleTodoStatus = (id) => {
    let todos = this.state.todos;
    let todo = todos.find(todo => todo.id === id);
    todo.isDone = !todo.isDone;
    this.updateDisplayedTodos(this.state.filter, todos);
  }

  updateDisplayedTodos = (filter, todos) => {
    let displayedTodos = todos.filter((todo) => {
      if (filter === 'all') {
        return true;
      } else if (filter === 'active') {
        return !todo.isDone;
      } else if (filter === 'completed') {
        return !!todo.isDone;
      }
    });
    this.setState({ ...this.state, displayedTodos, filter,  todos});
  }

  render() {
    return (
      <Provider value={this.state}>
        {this.props.children}
      </Provider>
    );
  }
}