import React, { Component } from 'react';
import TodoItem from './TodoItem.js';
import PropTypes from 'prop-types';

// Class
class Todos extends Component {

    // Checks to see if individual todo item is checked
	// markComplete = () => {

	// 	console.log('test props 1')

	// }

    // Render
    render() {

        // console.log(this.props.todos)

        return this.props.todos.map(
            
            (todo) => <TodoItem key={todo.id} todo={todo} 
            markComplete={this.props.markComplete}/>
            
        );

    }

}

// Proptypes
Todos.propTypes = {

    todos: PropTypes.array.isRequired
    
}

export default Todos;
