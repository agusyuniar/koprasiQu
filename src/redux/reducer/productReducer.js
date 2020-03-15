import { 
    GET_PRODUCT_SUCCESS 
} from "../action/types";

const INITIAL_STATE = {
    listProduct:[]
}

export default (state=INITIAL_STATE, action) => {
    switch(action.type){
        case GET_PRODUCT_SUCCESS : 
        console.log(action.payload);
            return {listProduct:action.payload}
        default:
            return state
    }
}