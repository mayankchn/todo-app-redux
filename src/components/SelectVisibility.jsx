import React from "react";

const SelectVisibility = ({handleVisibility}) => {
    return (
        <select name="" id="" className="border rounded-md indent-2 w-32" onChange={handleVisibility} defaultValue="SHOW_ALL">
            <option value="SHOW_ALL">All</option>
            <option value="SHOW_COMPLETED">Completed</option>
            <option value="SHOW_ACTIVE">Active</option>
        </select>
    )
}
export default SelectVisibility;