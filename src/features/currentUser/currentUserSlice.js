import {loadCurrentUser} from "../../currentUserApi";

export const currentUserReducer=(state={},action)=>{
    if (action.type==="CHANGE"){
        return{
            name: action.payload.name,
            arr:[...state.arr,6,action.payload.addInArray]
        }
    }
    return state


}

export const initialCurrentUSer={
    name: "Sargis",
    arr: [5,5,5]
}
export const getName=function(state){
    return state.currentUser.name
}
export const getArr=function(state){
    return state.currentUser.arr
}

export const actionCreator1=(value)=> {
    return{
        type: "CHANGE",
        payload:{
            name:value,
            addInArray:Math.random()*1000
        }
    }
}

export function loadUser(){
    return (dispatch,getState)=>{
        return loadCurrentUser().then((res)=>dispatch(actionCreator1(res.name)))
    }
}