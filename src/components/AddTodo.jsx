import React from "react";

const AddTodo = ({inputValue, handleInput, addToDo}) => {
    return (
        <form action="" onSubmit={addToDo} className="flex gap-1 items-center">
            <input type="text" onChange={handleInput} value={inputValue} placeholder="add a todo" className="indent-2 px-2 py-1 border rounded-md" />
            <div className="flex gap-1 flex-wrap">
                <button
                    className="px-2 py-1 text-white bg-gray-700 border rounded-md"
                    type="submit"
                >
                    Add a todo
                </button>
            </div>
        </form>
    )
}
export default AddTodo;