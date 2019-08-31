import listReducer from './reducer/reducer'
import {createStore,applyMiddleware} from "redux";
import thunk from 'redux-thunk'
let store = createStore(listReducer,applyMiddleware(thunk))

export default store;