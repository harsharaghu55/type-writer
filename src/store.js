import {createStore} from "redux"
import rootReducer from "./reducer/rootReducer.js"

const rStore = ()=>{
    return createStore(rootReducer)
}

export default rStore 