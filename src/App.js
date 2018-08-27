import React, { Component } from 'react';
import './index.css';

import TodoHeader from './components/TodoHeader';
import TodoList from './components/TodoList';
import TodoFooter from './components/TodoFooter'

class App extends Component {
  render() {
    return (
      <section className="todoapp">
        <TodoHeader />
        <TodoList />
        <TodoFooter />
      </section>
    );
  }
}

export default App;
