import {loadCurrentUser} from "../../currentUserApi";

export const countUserReducer=(state={},action)=>{

    switch (action.type) {
        case "ADD":
            return{
                count: state.count+1
            }
        case "REMOVE":
            return{
                count: state.count-1
            }
        case "RANDOM":
            return{
                count: state.count + Math.random()*1000
            }
        default:
            return state

    }
}

export const initialCountUser={
    count:0
}
export const getCount=(state)=>state.countUser.count
export const addCount=()=>{
    return{
        type: 'ADD',

    }

}

export const removeCount=()=>{
    return{
        type: 'REMOVE',
    }

}


export const randomAction=()=>{
    return{
        type: 'RANDOM',
    }

}
export function randomNumber(){
    return (dispatch,getState)=>{
        return loadCurrentUser().then((res)=>dispatch(randomAction()))
    }
}