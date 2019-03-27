import React, {Component} from "react";

class TodoForm extends Component {
    constructor () {
        super();
        this.state = {
            task: "",
            id: new Date(),
            completed: false
        }
    }

    handleChange = e => {
        this.setState({task: e.target.value});
    }

    render () {
        return (
            <form>
                <input 
                    type="text"    
                    placeholder="todo"
                    value={this.state.task}
                    onChange={this.handleChange}
                />
                <button>Submit</button>
            </form>
        )
    }
}
    

export default TodoForm;
