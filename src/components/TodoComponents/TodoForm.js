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
    render () {
        return (
            <form>
                <input placeholder="todo" />
            </form>
        )
    }
}
    

export default TodoForm;
