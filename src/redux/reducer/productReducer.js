import { 
    GET_PRODUCT_SUCCESS, GET_PRODUCT_DETAIL_SUCCESS 
} from "../action/types";

const INITIAL_STATE = {
    listProduct:[],
    productDetail:''
}

export default (state=INITIAL_STATE, action) => {
    switch(action.type){
        case GET_PRODUCT_SUCCESS : 
            console.log(action.payload);
            return {...state, listProduct:action.payload}
        case GET_PRODUCT_DETAIL_SUCCESS : 
            console.log(action.payload);
            return {...state, productDetail:action.payload}
        default:
            return state
    }
}