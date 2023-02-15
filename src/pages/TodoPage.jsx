import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { todosSelector, visibilityFilterSelector } from "../App";
import SelectVisibility from "../components/SelectVisibility";
import Todo from "../components/Todo";

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
        if(inputValue.trim().length>0){
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
        // console.log('toggle ', tid)
        dispatch({
            type: "TOGGLE_TODO",
            id: tid,
        })
    }

    const handleVisibility = (e) => {
        const { value } = e.target
        // console.log('value in handle visibility ', value)
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
                    <form action="" onSubmit={addToDo} className="flex flex-col gap-2 flex-wrap">
                        <input type="text" onChange={handleInput} value={inputValue} placeholder="add a todo" className="indent-2 px-2 py-1 border rounded-md" />
                        <div className="flex gap-1 flex-wrap">
                            <button
                                className="px-2 py-1 text-white bg-gray-700 border rounded-md"
                                type="submit"
                            >
                                Add a todo
                            </button>
                            <SelectVisibility handleVisibility={handleVisibility} />
                        </div>
                    </form>
                    {
                        filtTodos.map((t, i) => {
                            return <Todo key={i} todo={t} handleToggle={handleToggle} />
                        })
                    }
                </div>
            </div>
        </main>
    )
}
export default TodoPage;