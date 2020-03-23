import {
    INPUT_ADD_MURID_TEXT,
    REGISTER_MURID_FAILED,
    REGISTER_MURID_SUCCESS
} from '../action/types';

const INITIAL_STATE = {
    // nim: '',
    // password:'',
    // firstname:'',
    // lastname:'',
    // alamat:'',
    // email_ortu:''
}

export default (state=INITIAL_STATE, action) => {
    switch(action.type) {
        case INPUT_ADD_MURID_TEXT :
            console.log(action.payload);
            return { ...state, [action.payload.prop]: action.payload.value }
        case REGISTER_MURID_FAILED : 
            return {...state, error:action.payload}
        case REGISTER_MURID_SUCCESS : 
            return {INITIAL_STATE:{}}
        // case USER_LOGIN_FAIL :
        //     return { ...state, loading: false, error: action.payload }
        // case LOADING_LOGIN :
        //     return { ...state, loading: true, error: '' }
        // case USER_LOGIN_SUCCESS :
        //     return INITIAL_STATE
        default :
            return state      
    }
}