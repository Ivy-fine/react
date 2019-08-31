import {createStore,applyMiddleware} from 'redux'
import addReducer from "./reducer/reducer"
import thunk from "redux-thunk"

let store =createStore(addReducer,applyMiddleware(thunk))

export default store;