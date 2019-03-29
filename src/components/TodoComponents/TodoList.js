// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from "react";
import Todo from "./Todo";

const TodoList = ({todos, toggleTask}) => {
    return (
        <div>
            <ul>
                {todos.map(obj => <Todo key={obj.id} item={obj} toggleTask={toggleTask} />)}
            </ul>
        </div>
    )
}

export default TodoList;
