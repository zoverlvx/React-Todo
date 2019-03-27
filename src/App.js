import React, {Component} from "react";
import Header from "./components/TodoComponents/Header";

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
            ],
            todo: ""
        };
    }
    render() {
      return (
        <div>
            <Header text="Todo List: MVP"/>
        </div>
      );
    }
}

export default App;
