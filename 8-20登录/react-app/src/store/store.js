import {createStore,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import userReducer from './reducer/reducer'

let store =createStore(userReducer,applyMiddleware(thunk))
export default store;