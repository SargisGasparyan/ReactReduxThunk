import {createStore, combineReducers, applyMiddleware} from 'redux'
import {currentUserReducer} from "../features/currentUser/currentUserSlice";
import{initialCurrentUSer} from "../features/currentUser/currentUserSlice";
import {todoReducer} from "../features/todo/todoList";
import {initialReducers} from "../features/todo/todoList";
import thunk from 'redux-thunk'

const store = createStore(combineReducers({
    currentUser: currentUserReducer,
    todos: todoReducer
}),{
    friends: {},
    todos: initialReducers,
    currentUser: initialCurrentUSer
},applyMiddleware(thunk))

export default store