import axios from 'axios';

import {
    LOGIN_USERNAME_CHANGED,
    LOGIN_PASSWORD_CHANGED,
    ON_USER_LOGIN,
    LOGIN_SUCCESS,
    LOGIN_FAILED
} from './types';

import { API_URL_1 } from '../../helpers/apiurl'

export const inputLoginUsername = (username) => {  //terima perubahan dari input user
    return {
        type: LOGIN_USERNAME_CHANGED,
        payload: username
    }
}

export const inputLoginPassword = (password) => { //terima perubahan dari input user
    return {
        type: LOGIN_PASSWORD_CHANGED,
        payload: password
    }
}

export const loginUser = (user) => {
    return (dispatch) => {
        dispatch({ type: ON_USER_LOGIN })
        if(user.username !== '' && user.password !== '') {
            axios.post(API_URL_1 + '/user/login', {
                username: user.username,
                password: user.password
            }).then(res => {
                localStorage.setItem('token', res.data.token)
                dispatch({
                    type: LOGIN_SUCCESS,
                    payload: res.data
                })
            }).catch(err => {
                console.log(err.response)
                dispatch({
                    type: LOGIN_FAILED,
                    payload: err.response.data.message
                })
            })
        } else {
            dispatch({
                type: LOGIN_FAILED,
                payload: 'Mohon isi Username dan Password'
            })
        }
    }
}
