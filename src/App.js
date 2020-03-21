import React, {Component} from 'react';
import Header from './components/layout/Header.js'
import Todos from './components/todoList/Todos.js';
import AddTodo from './components/todoList/AddTodo.js';
import About from './components/pages/About.js';

import { v4 as uuidv4 } from 'uuid';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import axios from 'axios';

import './App.css';

class App extends Component {

	// State
	state = {

		// Hard coded example of 'todos' state
		// todos: [

		// 	{
		// 		id: uuidv4(),
		// 		title: 'Take out trash',
		// 		completed: false
		// 	},
		// 	{
		// 		id: uuidv4(),
		// 		title: 'Dinner with waify',
		// 		completed: true
		// 	},
		// 	{
		// 		id: uuidv4(),
		// 		title: 'Cuddle behbeh',
		// 		completed: false
		// 	},

		// ]

		todos: []

	}

	// Lifecycle method
	componentDidMount() {

		// Retrieves an array of 200 todos from url and displays in console
		// axios.get('https://jsonplaceholder.typicode.com/todos').then(res=> console.log(res.data))

		// Retrieves an array of 10 todos from url and displays in console
		// axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10').then(res=> console.log(res.data))

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

	// Add todo
	addTodo = (title) => {

		const newTodo = {

			id: uuidv4(),
			title: title,
			completed: false

		}

		// console.log(title)
		this.setState({ todos: [...this.state.todos, newTodo] })

	}

	// Render
	render(){

		// console.log(this.state.todos)

		return (

			<Router>

				<div className="App">
					
					<div className="container">

						{/* Header */}
						<Header />

						{/* Route for Index Page */}
						<Route exact path="/" render={props => (

							<React.Fragment>

								{/* Add Todo */}
								<AddTodo addTodo={this.addTodo}/>

								{/* Todos Component */}
								<Todos 
									todos={this.state.todos} 
									markComplete={this.markComplete}
									delTodo={this.delTodo}
								/>

							</React.Fragment>

						)} />

						{/* Route for About Page  */}
						<Route path="/about" component={About} />

					</div>

				</div>

			</Router>
	
		);

	}

}

export default App;
