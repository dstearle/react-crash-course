import React, { Component } from 'react';
import TodoItem from './TodoItem.js';

class Todos extends Component {

    // Render
    render() {

        // console.log(this.props.todos)

        return this.props.todos.map((todo) => <TodoItem todo={todo} />);

    }

}

export default Todos;
