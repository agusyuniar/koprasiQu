import { 
    GET_PRODUCT_SUCCESS, GET_PRODUCT_DETAIL_SUCCESS, GET_CART_SUCCESS, GET_TRANSACTION_SUCCESS
} from "../action/types";

const INITIAL_STATE = {
    listProduct:[],
    productDetail:'',
    listCart:[],
    listTransaction:[]
}

export default (state=INITIAL_STATE, action) => {
    switch(action.type){
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