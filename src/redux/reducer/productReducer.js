import { 
    GET_PRODUCT_SUCCESS, GET_PRODUCT_DETAIL_SUCCESS, GET_CART_SUCCESS, GET_TRANSACTION_SUCCESS, INPUT_SEARCH, GET_PRODUCT_SEARCH_SUCCESS
} from "../action/types";

const INITIAL_STATE = {
    listProduct:[],
    listProductSearch:[],
    productDetail:'',
    listCart:[],
    listTransaction:[],
    inputSearch : ""
}

export default (state=INITIAL_STATE, action) => {
    switch(action.type){
        case INPUT_SEARCH : 
            return {...state, inputSearch:action.payload}
        case GET_PRODUCT_SEARCH_SUCCESS : 
        return {...state, listProductSearch:action.payload}
        case GET_PRODUCT_SUCCESS : 
            console.log(action.payload);
            return {...state, listProduct:action.payload}
        case GET_PRODUCT_DETAIL_SUCCESS : 
            console.log(action.payload);
            return {...state, productDetail:action.payload}
        case GET_CART_SUCCESS : 
            console.log(action.payload);
            return {...state, listCart:action.payload}
        case GET_TRANSACTION_SUCCESS : 
            console.log(action.payload);
            return {...state, listTransaction:action.payload}
        default:
            return state
    }
}