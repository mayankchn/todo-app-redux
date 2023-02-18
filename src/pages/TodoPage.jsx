import React, { useState } from "react";
import { connect } from "react-redux";
import SelectVisibility from "../components/SelectVisibility";
import TodoList from "../components/TodoList";
import AddTodo from "../components/AddTodo";
import { todosSelector, visibilityFilterSelector } from "../selectors";
import { addTodoAction, setVisibilityFilterAction, toggleTodoAction } from "../actions";

let id = 0;

const TodoPage = ({ todos, visibilityFilter, addTodo, toggleTodo, setVisibilityFilter }) => {
    const [inputValue, setInputValue] = useState('')

    const handleInput = (e) => {
        setInputValue(e.target.value)
    }

    const addToDo = (e) => {
        e.preventDefault()
        id = id + 1;
        if (inputValue.trim().length > 0) {
            addTodo(id, inputValue, false)
        }
        setInputValue('')
    }

    const handleToggle = (tid) => {
        toggleTodo(tid)
    }

    const handleVisibility = (e) => {
        const { value } = e.target
        setVisibilityFilter(value)
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

const mapStateToProps = (state) => {
    console.log(state)
    return {
        todos: todosSelector(state),
        visibilityFilter: visibilityFilterSelector(state)
    }
}

const mapDispatchToProps = {
    addTodo: addTodoAction,
    toggleTodo: toggleTodoAction,
    setVisibilityFilter: setVisibilityFilterAction,
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoPage);