import {
    DETAIL_NIM_SELECT
} from '../action/types';

const INITIAL_STATE = {
    nim: null
}

export default (state=INITIAL_STATE, action) => {
    console.log(action.payload);
    switch(action.type){
        
        case DETAIL_NIM_SELECT :
            return {...state, nim: action.payload}
        default :
            return state
    }
}