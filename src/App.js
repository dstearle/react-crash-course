import React, {Component} from 'react';
import Header from './components/layout/Header.js'
import Todos from './components/Todos.js';
import AddTodo from './components/AddTodo.js';
import './App.css';

class App extends Component {

	// State
	state = {

		todos: [

			{
				id:1,
				title: 'Take out trash',
				completed: false
			},
			{
				id:2,
				title: 'Dinner with waify',
				completed: true
			},
			{
				id:3,
				title: 'Cuddle behbeh',
				completed: false
			},

		]

	}

	// Checks to see if individual todo item is checked
	markComplete = (id) => {

		// Maps the state for todos
		this.setState({ todos: this.state.todos.map(todo => {

				// Toggles boolean for completed
				if(todo.id === id) {

					todo.completed = !todo.completed

				}

				return todo;

			})

		})

	}

	// Delete todo
	delTodo = (id) => {

		// console.log(id)
		this.setState({

			// Filters the array of todo items
			todos: [...this.state.todos.filter(todo => todo.id !== id)]

		});

	}

	// Render
	render(){

		// console.log(this.state.todos)

		return (

			<div className="App">
	
				<div className="container">

					{/* Header */}
					<Header />

					{/* Add Todo */}
					<AddTodo />

					{/* Todos Component */}
					<Todos 
						todos={this.state.todos} 
						markComplete={this.markComplete}
						delTodo={this.delTodo}
					/>

				</div>
	
			</div>
	
		);

	}

}

export default App;
