import {
    INPUT_TEXT,
    CHEKCED_TERMS_REGISTER,
    HIDE_UNHIDE,
    
} from '../action/types';

const INITIAL_STATE = {
    firstname: null,
    lastname:null,
    alamat:null,
    email: null,
    username:null,
    password: null,
    confPassword:null,
    hidePassword: true,
    error: null,
    checked:false,
    loading: false
}

export default (state=INITIAL_STATE, action) => {
    switch(action.type) {
        case INPUT_TEXT :
            console.log(action.payload);
            return { ...state, [action.payload.prop]: action.payload.value }
        case CHEKCED_TERMS_REGISTER :
            return{...state, checked:!state.checked}
        case HIDE_UNHIDE :
            return { ...state, hidePassword: !state.hidePassword }
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