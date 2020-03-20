import React, { Component } from 'react';

// Class
export class AddTodo extends Component {

    render() {

        return (

            // Form
            <form style={{ display: 'flex' }}>

                {/* Add Todo Input */}
                <input 
                    type="text" 
                    name="title"
                    style={{ flex: '10', padding: '5px' }} 
                    placeholder="Add Todo..."
                />

                {/* Submit Button */}
                <input 
                    type="submit" 
                    value="Submit" 
                    className="btn"
                    style={{ flex: '1' }}
                />

            </form>

        )

    }

}

export default AddTodo;