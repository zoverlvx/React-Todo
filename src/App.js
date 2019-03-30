import React, { useState} from "react";
import Header from "./components/TodoComponents/Header";
import TodoForm from "./components/TodoComponents/TodoForm";
import TodoList from "./components/TodoComponents/TodoList";

function App () {
    const [state, setState] = useState([
		{
	    	task: "Organize Garage", 
	    	id: (new Date()).getTime(), 
	    	completed: false
		}
    ])

    function addTask(task) {
		setState([...state, task])
    }

    function toggleTask (chosenId) {
		setState(state.map(item => {
	    	if (item.id === chosenId) {
	        	return {
	            	...item,
	            	completed: !item.completed
	        	};
	    	}
            return item;
	    	})
        )
    }

	function clearCompleted(e) {
		e.preventDefault();
		function filterForIncompletedTasks(item) {
			return !item.completed;
		}
		const incompleteTasks = state.filter(filterForIncompletedTasks)
		setState(incompleteTasks)
    }

	return (
        <div>
            <Header text="Todo List: MVP"/>
            <TodoList 
				toggleTask={toggleTask}
                todos={state} 
            />
	    	<TodoForm addTask={addTask} />
            <button onClick={clearCompleted}>Clear Completed</button>
        </div>
      );

}

export default App;
