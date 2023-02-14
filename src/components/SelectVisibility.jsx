import React from "react";

const SelectVisibility = ({handleVisibility}) => {
    return (
        <select name="" id="" className="border rounded-md indent-2 w-32" onChange={handleVisibility} defaultValue="all">
            <option value="all">Show all</option>
            <option value="completed">Completed</option>
            <option value="active">Active</option>
        </select>
    )
}
export default SelectVisibility;