import {
    GET_PRODUCT_CATEGORY_SUCCESS, SELECTED_CATEGORY
} from '../action/types';

const INITIAL_STATE = {
    listProductCategory:[],
    selectedCategory : ''
}


export default (state=INITIAL_STATE, action) => {
    console.log(action.payload);
    switch(action.type){
        case SELECTED_CATEGORY : 
        console.log(action.payload);
        
        return{...state, selectedCategory: action.payload}

        case GET_PRODUCT_CATEGORY_SUCCESS :
            console.log('listProductCat: ',action.payload);
            
            return {...state, listProductCategory: action.payload}
        default :
            return state
    }
}