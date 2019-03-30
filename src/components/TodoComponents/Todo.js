import React from "react";

const Todo = ({item: {task, id, completed}, toggleTask}) => {
    return (
	    <li 
		style={completed ? {textDecorationLine: "line-through"} : {textDecorationLine: "none"}} 
		onClick={() => toggleTask(id)}>
			{task}
	    </li>
	)
}
export default Todo;
