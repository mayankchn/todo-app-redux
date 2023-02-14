import React from 'react'
import { combineReducers, createStore } from "redux";
import TodoPage from './pages/TodoPage';

// reducers
const todo = (state={},action)=>{
  switch(action.type){
    case "ADD_TODO":
        return {
          id: action.id,
          text: action.text,
          completed: action.completed,
        }
    case "TOGGLE_TODO":
        return {
          ...state,completed:!state.completed,
        }
    default:
        return state;
  }
}

const todos = (state = [], action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [
        ...state,
        todo(undefined,action)
      ]
    case "TOGGLE_TODO" : 
      return state.map((t)=>{
        return t.id===action.id ? todo(t,action) :t;
      })
    default:
      return state
  }
}

const visibilityFilter = (state='Show all', action) => {
  switch(action.type){
    case "SET_VISIBILITY_FILTER" : 
      return action.filter
    default : 
      return state
  }
}

// reducers composition
// const todoApp = (state={},action) => {
//   console.log('state is ',state)
//   return {
//     todos:todos(state.todos,action),
//     visibilityFilter:visibilityFilter(state.visibilityFilter,action),
//   }
// }
const todoApp = combineReducers({
  todos:todos,
  visibilityFilter:visibilityFilter,
})

// selectors 
export const todosSelector = (state) => {
  return state.todos;
}
export const visibilityFilterSelector = (state) => {
  return state.visibilityFilter;
}

export const store = createStore(todoApp, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

function App() {

  return (
      <TodoPage />
  )
}

export default App
