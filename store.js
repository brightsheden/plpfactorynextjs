import {createStore,combineReducers,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from "redux-devtools-extension";
import { createWrapper, HYDRATE } from 'next-redux-wrapper';
import { templatesListReducer } from './Reducers/templateReducer';



//reducers
const reducer = combineReducers({
    templateList : templatesListReducer,
})



var userInfoFromStorage 
var userInfoTwoFromStorage 

if (typeof window !== 'undefined'){
     userInfoFromStorage = localStorage.getItem("userInfo") ?
        JSON.parse(localStorage.getItem("userInfo")) : null

     userInfoTwoFromStorage = localStorage.getItem("profiles") ?
        JSON.parse(localStorage.getItem("profiles")) : null



}



const initialState = {
    userLogin: {userInfo: userInfoFromStorage},
      userProfileMore: {profiles: userInfoTwoFromStorage}
      
        }
    


const middleware=[thunk]

//creating store
const store = createStore(reducer,initialState,
    composeWithDevTools(applyMiddleware(...middleware)))

//assigning store to next wrapper
const makestore = () => store;

export const wrapper = createWrapper(makestore)
    