import {legacy_createStore as createStore,combineReducers,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from "redux-devtools-extension";
import { createWrapper, HYDRATE } from 'next-redux-wrapper';
import { templatesListReducer } from './Reducers/templateReducer';


const reducer = combineReducers({
    templateList : templatesListReducer,
})

const middleware=[thunk]
const initStore = ()=>{
    return  createStore(reducer,composeWithDevTools(applyMiddleware(...middleware)))
}


export const wrapper = createWrapper(initStore)