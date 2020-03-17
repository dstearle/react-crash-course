import React, { Component } from 'react';

class Todos extends Component {

    // Render
    render() {

        console.log(this.props.todos)

        return (

            <div>
        
                {/* Title */}
                <h1>Todos</h1>
        
            </div>
        
        );

    }

}

export default Todos;
