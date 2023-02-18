import { combineReducers } from "redux";
import { todos } from "../sub-reducers/todos";
import { visibilityFilter } from "../sub-reducers/visibilityFilter";

// reducers composition
// const todoApp = (state={},action) => {
//   console.log('state is ',state)
//   return {
//     todos:todos(state.todos,action),
//     visibilityFilter:visibilityFilter(state.visibilityFilter,action),
//   }
// }

export const todoApp = combineReducers({
    todos: todos,
    visibilityFilter: visibilityFilter,
  })