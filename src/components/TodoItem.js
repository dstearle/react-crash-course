import React, { Component } from 'react';
import PropTypes from 'prop-types';

// class
class TodoItem extends Component {

    // Determines if item should be marked off or not
    // getStyle = () => {

    //     // If the todo item has been completed mark it off
    //     if(this.props.todo.completed) {

    //         return {

    //             textDecoration: 'line-through'

    //         }

    //     }

    //     // Else leave unmarked
    //     else {

    //         return {

    //             textDecoration: 'none'

    //         }

    //     }

    // }

    // Same as above example but shorter
    getStyle = () => {

        return {

            background: '#f4f4f4',
            padding: '10px',
            borderBottom: '1px #ccc dotted',
            textDecoration: this.props.todo.completed ? 'line-through' : 'none'

        }

    }

    // Method for check boxes
    markComplete = (e) => {

        console.log(this.props)

    }

    // Render
    render() {

        // Destructuring for todo props
        const {id, title} = this.props.todo;

        return(

            <div style={ this.getStyle() }>

                <h3>

                    {/* Checkbox */}
                    <input type="checkbox" onChange={this.props.markComplete.bind(this, id)}/> { ' ' }

                    {/* Title */}
                    { title }
                    
                </h3>

            </div>

        )

    }

}

// Proptypes
TodoItem.propTypes = {

    todo: PropTypes.object.isRequired
    
}

// Styling Example
// const itemStyle = {

//     backgroundColor: '#f4f4f4'

// }

export default TodoItem;