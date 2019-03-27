import React, {Component} from "react";
import Header from "./components/TodoComponents/Header";
import TodoList from "./components/TodoComponents/TodoList";

class App extends Component {
    constructor() {
        super();
        this.state = {
            todos: [  
                {
                    task: "Organize Garage",
                    id: 1528817077286,
                    completed: false
                },
                {
                    task: "Bake Cookies",
                    id: 1528817084358,
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

    render() {
      return (
        <div>
            <Header text="Todo List: MVP"/>
            <TodoList 
                addTask={this.addTask}
                todos={this.state.todos} 
            />
        </div>
      );
    }
}

export default App;
