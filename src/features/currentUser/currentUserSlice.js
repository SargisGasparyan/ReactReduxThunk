import {loadCurrentUser} from "../../currentUserApi";

export const currentUserReducer=(state={},action)=>{
    if (action.type==="CHANGE"){
        return{
            name: action.payload.name
        }
    }
    return state


}

export const initialCurrentUSer={
    name: "Sargis"
}
export const getName=function(state){
    return state.currentUser.name
}

export const actionCreator1=(value)=> {
    return{
        type: "CHANGE",
        payload:{
            name:value
        }
    }
}

export function loadUser(){
    return (dispatch,getState)=>{
        return loadCurrentUser().then((res)=>dispatch(actionCreator1(res.name)))
    }
}