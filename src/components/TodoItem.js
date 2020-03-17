import React, { Component } from 'react';
import PropTypes from 'prop-types';

// class
class TodoItem extends Component {

    // Render
    render() {

        return(

            <div>

                <h3>{ this.props.todo.title }</h3>

            </div>

        )

    }

}

// Proptypes
TodoItem.propTypes = {

    todo: PropTypes.object.isRequired
    
}

export default TodoItem;