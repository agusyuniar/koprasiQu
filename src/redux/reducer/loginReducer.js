import {
    LOGIN_NIM_CHANGED,
    LOGIN_USERNAME_CHANGED,
    LOGIN_PASSWORD_CHANGED,
    ON_USER_LOGIN,
    LOGIN_FAILED,
    LOGIN_SUCCESS,
    HIDE_UNHIDE,
} from '../action/types';

const INITIAL_STATE = {
    nim:'',
    username:'',
    password: '',
    hidePassword: true,
    loading: false,
    error: ''
}

export default (state=INITIAL_STATE, action) => {
    switch(action.type) {
        //terima input login
        case LOGIN_NIM_CHANGED:
            return { ...state, nim: action.payload }
        case LOGIN_USERNAME_CHANGED:
            return { ...state, username: action.payload }
        case LOGIN_PASSWORD_CHANGED:
            return { ...state, password: action.payload }
        case HIDE_UNHIDE:
            return {...state, hidePassword: !state.hidePassword}
        case ON_USER_LOGIN :
            return { ...state, loading: true, error: '' }
        case LOGIN_FAILED :
            return { ...state, loading: false, error: action.payload }
        case LOGIN_SUCCESS :
            return INITIAL_STATE //kembalikan isi textbox dll ke initial state
        default :
            return state
    }
}