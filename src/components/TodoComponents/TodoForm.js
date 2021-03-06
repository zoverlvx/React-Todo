import React, {Component} from "react";

class TodoForm extends Component {
    constructor () {
        super();
        this.state = {
            task: "",
	    id: (new Date()).getTime(), 
            completed: false
        }
    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.addTask({
            task: this.state.task,
            id: (new Date()).getTime(),
            completed: false
        });

        this.setState({
            task: ""
        })
    }

    handleChange = e => {
        this.setState({task: e.target.value});
    }

    render () {
        return (
            <form onSubmit={this.handleSubmit}>
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
