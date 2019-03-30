import React, {useState} from "react";

function TodoForm({addTask}) {
	const [state, setState] = useState({
		task: "",
		id: (new Date()).getTime(),
		completed: false
	});

	function handleSubmit(e) {
		e.preventDefault();
		addTask({
			task: state.task,
			id: (new Date()).getTime(),
			completed: false
		});
		setState({task: ""});
	}

	function handleChange(e) {
        setState({task: e.target.value});
    }

	return (
            <form onSubmit={handleSubmit}>
                <input 
                    type="text"    
                    placeholder="todo"
                    value={state.task}
                    onChange={handleChange}
                />
                <button>Submit</button>
            </form>
        )
}

export default TodoForm;
