import {createStore,combineReducers} from 'redux'
import {currentUserReducer} from "../features/currentUser/currentUserSlice";
import{initialCurrentUSer} from "../features/currentUser/currentUserSlice";
import {todoReducer} from "../features/todo/todoList";
import {initialReducers} from "../features/todo/todoList";

const store = createStore(combineReducers({
    currentUser: currentUserReducer,
    todos: todoReducer
}),{
    friends: {},
    todos: initialReducers,
    currentUser: initialCurrentUSer
})

export default store