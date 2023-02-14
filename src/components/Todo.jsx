import React from "react";

const Todo = ({ todo,handleToggle }) => {
    let todoClass = "";
    if(todo.completed){
        todoClass="line-through"
    }
    return (
        <section>
            <div className="container max-w-md border rounded-md mx-auto px-2 py-1">
                <div className="flex gap-1 justify-start items-center">
                    <input type="checkbox" id={todo.id} onChange={()=>handleToggle(todo.id)} checked={todo.completed}/>
                    <label htmlFor={todo.id} className={todoClass}>{todo.text}</label>
                </div>
            </div>
        </section>
    )
}
export default Todo;