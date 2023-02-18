import { ADD_TODO, TOGGLE_TODO } from "../actions";

const todo = (state = {}, action) => {
    switch (action.type) {
      case ADD_TODO:
        return {
          id: action.id,
          text: action.text,
          completed: action.completed,
        }
      case TOGGLE_TODO:
        return {
          ...state, completed: !state.completed,
        }
      default:
        return state;
    }
  }


export const todos = (state = [], action) => {
    switch (action.type) {
      case ADD_TODO:
        return [
          ...state,
          todo(undefined, action)
        ]
      case TOGGLE_TODO:
        return state.map((t) => {
          return t.id === action.id ? todo(t, action) : t;
        })
      default:
        return state
    }
  }