import {
    TEMPLATE_LIST_REQUEST,
    TEMPLATE_LIST_SUCCESS,
    TEMPLATE_LIST_FAIL,
} from '../Constants/templateConstants'

import axios from "axios"

export const listTemplates = (keyword= '')=> async (dispatch)=>{
    try {
        dispatch({ type: TEMPLATE_LIST_REQUEST })

        const { data } = await axios.get(`http://127.0.0.1:8000/api/templates/`)
        console.log(data)

        dispatch({
            type: TEMPLATE_LIST_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: TEMPLATE_LIST_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}
