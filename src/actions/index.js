export const ADD_TODO = "ADD_TODO";
export const TOGGLE_TODO = "TOGGLE_TODO"
export const SET_VISIBILITY_FILTER = "SET_VISIBILITY_FILTER"

export const addTodoAction = (t_id, t_text, t_completed) => {
    console.log(t_id)
    return {
        type: ADD_TODO,
        id: t_id,
        text: t_text,
        completed: t_completed,
    }
}

export const toggleTodoAction = (t_id) => {
    console.log(t_id)
    return {
        type:TOGGLE_TODO,
        id:t_id,
    }
}

export const setVisibilityFilterAction = (t_value) => {
    return {
        type:SET_VISIBILITY_FILTER,
        filter:t_value,
    }
}