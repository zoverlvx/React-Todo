// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from "react";
import Todo from "./Todo";
import TodoForm from "./TodoForm";

const TodoList = ({todos}) => {
    return (
        <div>
            <ul>
                {todos.map(({task}) => <Todo item={task} />)}
            </ul>
            <TodoForm />
        </div>
    )
}

export default TodoList;
