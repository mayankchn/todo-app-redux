import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import SelectVisibility from "../components/SelectVisibility";
import TodoList from "../components/TodoList";
import AddTodo from "../components/AddTodo";
import { todosSelector, visibilityFilterSelector } from "../selectors";

let id = 0;

const TodoPage = () => {
    const [inputValue, setInputValue] = useState('')

    const dispatch = useDispatch()

    const todos = useSelector(todosSelector)
    const visibilityFilter = useSelector(visibilityFilterSelector)

    const handleInput = (e) => {
        setInputValue(e.target.value)
    }

    const addToDo = (e) => {
        e.preventDefault()
        if (inputValue.trim().length > 0) {
            dispatch({
                type: "ADD_TODO",
                id: id++,
                text: inputValue,
                completed: false,
            })
        }
        setInputValue('')
    }

    const handleToggle = (tid) => {
        dispatch({
            type: "TOGGLE_TODO",
            id: tid,
        })
    }

    const handleVisibility = (e) => {
        const { value } = e.target
        dispatch({
            type: "SET_VISIBILITY_FILTER",
            filter: value,
        })
    }

    let filtTodos = todos
    if (visibilityFilter === "SHOW_ALL") {
        filtTodos = todos
    } else if (visibilityFilter === "SHOW_COMPLETED") {
        filtTodos = todos.filter((todo) => {
            return todo.completed === true;
        })
    } else if (visibilityFilter === "SHOW_ACTIVE") {
        filtTodos = todos.filter((todo) => {
            return todo.completed === false;
        })
    }

    return (
        <main className="my-10">
            <div className="container max-w-md border rounded-md mx-auto p-5">
                <div className="p-2 border flex flex-col gap-3">
                    <h1 className="font-bold text-2xl self-center uppercase">Todo App</h1>
                    <div className="flex flex-col gap-1">
                        <AddTodo inputValue={inputValue} handleInput={handleInput} addToDo={addToDo} />
                        <SelectVisibility handleVisibility={handleVisibility} />
                    </div>
                    <TodoList filtTodos={filtTodos} handleToggle={handleToggle} />
                </div>
            </div>
        </main>
    )
}
export default TodoPage;