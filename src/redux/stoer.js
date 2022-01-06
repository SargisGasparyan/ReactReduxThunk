import {createStore, combineReducers, applyMiddleware} from 'redux'
import {currentUserReducer} from "../features/currentUser/currentUserSlice";
import{initialCurrentUSer} from "../features/currentUser/currentUserSlice";
import {todoReducer} from "../features/todo/todoList";
import {initialReducers} from "../features/todo/todoList";
import thunk from 'redux-thunk'
import {countUserReducer, initialCountUser} from "../features/countUser/countUser";

const store = createStore(combineReducers({
    currentUser: currentUserReducer,
    todos: todoReducer,
    countUser: countUserReducer
}),{
    friends: {},
    todos: initialReducers,
    countUser: initialCountUser,
    currentUser: initialCurrentUSer
},applyMiddleware(thunk))

export default store