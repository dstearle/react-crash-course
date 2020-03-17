import React, {Component} from 'react';
import Todos from './components/Todos.js';
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
	markComplete = () => {

		console.log('test props 2')

	}

	// Render
	render(){

		// console.log(this.state.todos)

		return (

			<div className="App">
	
				{/* Title */}
				<h1>App</h1>
	
				{/* Todos Component */}
				<Todos todos={this.state.todos} markComplete={this.markComplete}/>
	
			</div>
	
		);

	}

}

export default App;
