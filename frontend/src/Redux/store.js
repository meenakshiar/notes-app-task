import { applyMiddleware, combineReducers, legacy_createStore, compose } from "redux"
import thunk from 'redux-thunk'
import Reducer from "./reducer"
const rootReducer = combineReducers({ Reducer });

export const store = legacy_createStore(rootReducer, compose(applyMiddleware(thunk)));