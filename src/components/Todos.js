import React, { Component } from 'react';
import TodoItem from './TodoItem.js';
import PropTypes from 'prop-types';

// Class
class Todos extends Component {

    // Render
    render() {

        // console.log(this.props.todos)

        return this.props.todos.map((todo) => <TodoItem key={todo.id} todo={todo} />);

    }

}

// Proptypes
Todos.propTypes = {

    todos: PropTypes.array.isRequired
    
}

export default Todos;
