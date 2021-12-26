
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
