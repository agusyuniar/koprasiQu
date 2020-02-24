import {
    LOGIN_USERNAME_CHANGED,
    LOGIN_PASSWORD_CHANGED,
    ON_USER_LOGIN,
    LOGIN_FAILED,
    LOGIN_SUCCESS,
} from '../action/types';

const INITIAL_STATE = {
    email: '',
    username:'',
    password: '',
    loading: false,
    error: ''
}

export default (state=INITIAL_STATE, action) => {
    switch(action.type) {
        case LOGIN_USERNAME_CHANGED:
            return { ...state, username: action.payload }
        case LOGIN_PASSWORD_CHANGED:
            return { ...state, password: action.payload }
        case ON_USER_LOGIN :
            return { ...state, loading: true, error: '' }
        case LOGIN_FAILED :
            return { ...state, loading: false, error: action.payload }
        case LOGIN_SUCCESS :
            return INITIAL_STATE
        default :
            return state
    }
}