import React from "react";
import Todo from "./Todo";

const TodoList = ({filtTodos, handleToggle}) => {
    return (
        <div>
            {
                filtTodos.map((t, i) => {
                    return <Todo key={i} todo={t} handleToggle={handleToggle} />
                })
            }
        </div>
    )
}
export default TodoList