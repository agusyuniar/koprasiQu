import axios from 'axios';
import { API_URL_1 } from '../../helpers/apiurl'
import {
    LOGIN_NIM_CHANGED,
    LOGIN_USERNAME_CHANGED,
    LOGIN_PASSWORD_CHANGED,
    HIDE_UNHIDE,
    ON_USER_LOGIN,
    LOGIN_FAILED,
    LOGIN_SUCCESS
} from './types';


export const inputUsername = (username) => {  //terima perubahan dari input user
    return {
        type: LOGIN_USERNAME_CHANGED,
        payload: username
    }
}   

export const inputPassword = (password) => { //terima perubahan dari input user
    return {
        type: LOGIN_PASSWORD_CHANGED,
        payload: password
    }
}

export const hideUnhide = () => {
    return {
        type: HIDE_UNHIDE
    }
}

export const loginUserParent = (user) => {
    console.log(user);
    
    return (dispatch) => {
        dispatch({ type: ON_USER_LOGIN })
        if(user.username !== "" && user.password!== "") {
            axios.post(API_URL_1 + '/user/loginPrt', {
                username: user.username,
                password: user.password
            }).then(res => {
                console.log(res.data);
                localStorage.setItem('ptoken', res.data.token)
                dispatch({
                    type: LOGIN_SUCCESS,
                    payload: res.data
                    
                })
            }).catch(err => {
                console.log(err.response)
                dispatch({
                    type: LOGIN_FAILED,
                    payload: err.response
                })
            })
        } else {
            dispatch({
                type: LOGIN_FAILED,
                payload: 'Mohon isi Username dan Password'
            })
        }
    }

    /*
    return async (dispatch) => {
        try{
            const res = await axios.get(API_URL_1+'/user/loginPrt', {username, password})
            console.log(res.data);
            
            await localStorage.setItem('usertoken', res.data.token) //simpan di localstorage dgn nama usertoken
            
            dispatch({
                type:LOGIN_SUCCESS,
                payload:res.data
            })
            
        }catch(err){
            dispatch({
                type:LOGIN_FAILED,
                payload: err.response ? err.response.data.message : err.name
            })
        }
    }
    */
}



export const loginUser = ({username, password}) => {
    return (dispatch) => {
        dispatch({ type: ON_USER_LOGIN })
        if(username !== '' && password !== '') {
            axios.get(API_URL_1 + '/user/loginPrt', {username, password})
            .then(res => {
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
