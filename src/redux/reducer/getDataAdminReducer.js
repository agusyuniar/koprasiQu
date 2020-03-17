import { 
    GET_PRODUCT_SUCCESS,
    GET_PARENT_SUCCESS } from "../action/types";


const INITIAL_STATE = {
    dataParent : [],
    dataMurid : [],
    dataProduct : []
}

export default (state=INITIAL_STATE,action)=>{
    switch (action.type) {
        
        case GET_PARENT_SUCCESS : 
        return {
            ...state,dataParent:action.payload,   
        }
        case GET_PRODUCT_SUCCESS : 
            return {
                ...state,dataProduct:action.payload,
            }
        default :
            return state
    }
}