import React from 'react';
import { Link } from 'react-router-dom';

function Header() {

    return (

        <header style={headerStyle}>

            {/* Title */}
            <h1>Todo List</h1>

            {/* Page Links */}
            <Link to="/" style={linkStyle}>Home</Link> |

            <Link to="/about" style={linkStyle}>About</Link>

        </header>

    )

}

// Styling

const headerStyle = {

    background: '#333',
    color: '#fff',
    textAlign: 'center',
    padding: '10px'

}

const linkStyle = {

    color: '#fff',
    textDecoration: 'none'
    
}

export default Header;