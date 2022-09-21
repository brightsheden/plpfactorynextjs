
import { HYDRATE } from 'next-redux-wrapper';
import {
    TEMPLATE_LIST_REQUEST,
    TEMPLATE_LIST_SUCCESS,
    TEMPLATE_LIST_FAIL,
} from '../Constants/templateConstants'

export const templatesListReducer = (state= {templates : []}, action)=>{
    switch (action.type) {
 
        case TEMPLATE_LIST_REQUEST:
            return {loading: true, templates:[]}
            
        case TEMPLATE_LIST_SUCCESS:
            return {loading: false,
                templates:action.payload.templates, 
                page:action.payload.page, 
                pages:action.payload.pages
            }

        case TEMPLATE_LIST_FAIL:
            return {loading: false, error:action.payload}    

        default:
            return state;
    }
}
