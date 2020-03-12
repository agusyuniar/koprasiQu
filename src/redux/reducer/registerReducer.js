import {
    INPUT_TEXT,
    CHEKCED_TERMS_REGISTER,
    HIDE_UNHIDE,
    ON_REGISTER_PARENT,
    REGISTER_FAILED,
    REGISTER_SUCCESS
    
} from '../action/types';

const INITIAL_STATE = {
    firstname: '',
    lastname:'',
    alamat:'',
    email: '',
    username:'',
    password: '',
    confPassword:'',
    hidePassword: true,
    error: '',
    checked:false,
    loading: false,
    hidePassword: true,
    success:false
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
        case ON_REGISTER_PARENT :
            return { ...state, error: '' }
        case REGISTER_FAILED : 
            return {...state, error:action.payload}
        case REGISTER_SUCCESS : 
            return {INITIAL_STATE, success:true}
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