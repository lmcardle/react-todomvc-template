import React, { Component } from 'react';

export default class TodosProvider extends Component {
  render() {
    return this.props.children;
  }
}