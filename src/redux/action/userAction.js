import axios from 'axios';

import { LOGIN_SUCCESS, LOGOUT_USER } from "./types";

import { API_URL_1 } from '../../helpers/apiurl'

export const confirmLogin = (user) => {
    return {
        type: LOGIN_SUCCESS,
        payload: user
    }
}

export const KeepLogin = (token) => {
    return (dispatch) => {
        var options = {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }

        axios.post(API_URL_1 + '/user/keepsign', null, options)
            .then(res => {
                console.log(res.data)
                dispatch({
                    type: LOGIN_SUCCESS,
                    payload: res.data
                })
            }).catch(err => {
                localStorage.removeItem('ptoken')
                // console.log(err.response.data)
                dispatch({
                    type: LOGOUT_USER
                })
            })
    }
}


export const logoutUser = () => {
    localStorage.removeItem('ptoken')
    localStorage.removeItem('nim')
    return {
        type: LOGOUT_USER
    }
}