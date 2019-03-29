import React, {Component} from "react";
import Header from "./components/TodoComponents/Header";
import TodoForm from "./components/TodoComponents/TodoForm";
import TodoList from "./components/TodoComponents/TodoList";

class App extends Component {
    constructor() {
        super();
        this.state = {
            todos: [  
                {
                    task: "Organize Garage",
                    id: (new Date()).getTime(),
                    completed: false
                }
            ]
        };
    }

    addTask = task => {
        this.setState({
            todos: [...this.state.todos, task]
        });
    }

    toggleTask = chosenId => {
	this.setState({
	    todos: this.state.todos.map(item => {
		if (item.id === chosenId) {
		    return { 
			...item,
			completed: !item.completed
		    };
		}
		return item; 
	    })
	})
    }

    clearCompleted = e => {
	e.preventDefault();
	function filterForIncompletedTasks(item) {
		return !item.completed;
	}
	const incompleteTasks = this.state.todos.filter(filterForIncompletedTasks)
	this.setState({todos: incompleteTasks})
    }

    render() {
      return (
        <div>
            <Header text="Todo List: MVP"/>
            <TodoList 
		toggleTask={this.toggleTask}
                addTask={this.addTask}
                todos={this.state.todos} 
            />
	    <TodoForm addTask={this.addTask} />
            <button onClick={this.clearCompleted}>Clear Completed</button>
        </div>
      );
    }
}

export default App;
