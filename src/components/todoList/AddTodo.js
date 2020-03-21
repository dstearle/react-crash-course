import React, { Component } from 'react';

// Class
export class AddTodo extends Component {

    // State
    state= {

        title: ''

    }

    // 
    onSubmit = (e) => {

        e.preventDefault();
        this.props.addTodo(this.state.title);
        this.setState({ title: '' });
        
    }

    // Method for updating value of state
    onChange = (e) => this.setState({ [e.target.name]: e.target.value });

    render() {

        return (

            // Form
            <form onSubmit={this.onSubmit} style={{ display: 'flex' }}>

                {/* Add Todo Input */}
                <input 
                    type="text" 
                    name="title"
                    style={{ flex: '10', padding: '5px' }} 
                    placeholder="Add Todo..."
                    value={this.state.title}
                    onChange={this.onChange}
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