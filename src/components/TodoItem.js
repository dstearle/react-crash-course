import React, { Component } from 'react';
import PropTypes from 'prop-types';

// class
class TodoItem extends Component {

    // 
    getStyle = () => {

        // If the todo item has been completed mark it off
        if(this.props.todo.completed) {

            return {

                textDecoration: 'line-through'

            }

        }

        // Else leave unmarked
        else {

            return {

                textDecoration: 'none'

            }

        }

    }

    // Render
    render() {

        return(

            <div style={ this.getStyle() }>

                <h3>{ this.props.todo.title }</h3>

            </div>

        )

    }

}

// Proptypes
TodoItem.propTypes = {

    todo: PropTypes.object.isRequired
    
}

// Styling
// const itemStyle = {

//     backgroundColor: '#f4f4f4'

// }

export default TodoItem;