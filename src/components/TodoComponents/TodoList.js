// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import Todo from "./Todo";

const TodoList = ({todos}) => {
    return (
        <ul>
            {todos.map(({task}) => <Todo item={task} />)}
        </ul>
    )
}

export default TodoList;
