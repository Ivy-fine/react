import {createStore,applyMiddleware} from 'redux'
import msgReducer from "./reducer/reducer"
import thunk from 'redux-thunk'
let store = createStore(msgReducer,applyMiddleware(thunk));

export default store;