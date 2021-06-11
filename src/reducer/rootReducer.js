const counterState={
    para:"",
    count:0,
    indexsOfwrongtype:[],
    numberofWords:0,
    clockRunning:false
}

const rootReducer = (state=counterState,action) =>{
    switch(action.type){
        case "setPara":
            return{...state,para:action.payLoad}
        case "setCount":
            return {...state,count:action.payLoad}
        case "setIndexsOfwrongtype":
            return {...state,indexsOfwrongtype:[...action.payLoad]}

        case "setClock":
            return {...state,clockRunning:action.payLoad}
        default:
            return state
    }
}

export default rootReducer
