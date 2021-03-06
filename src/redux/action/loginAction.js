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
export const inputNim = (nim) => {  //terima perubahan dari input user
    return {
        type: LOGIN_NIM_CHANGED,
        payload: nim
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
                console.log(err.response )
                if(err.response==undefined){
                    return (
                        dispatch({
                            type: LOGIN_FAILED,
                            payload: 'Database offline, silahkan coba beberapa saat lagi'
                        })        
                    )
                }
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
export const loginStudent = (user) => {
    console.log(user);
    
    return (dispatch) => {
        dispatch({ type: ON_USER_LOGIN })
        if(user.nim !== "" && user.password!== "") {
            axios.post(API_URL_1 + '/user/loginStd', {
                nim: user.nim,
                password: user.password
            }).then(res => {
                console.log(res.data);
                localStorage.setItem('ptoken', res.data.token)
                dispatch({
                    type: LOGIN_SUCCESS,
                    payload: res.data 
                })
            }).catch(err => {
                console.log(err.response )
                if(err.response==undefined){
                    return (
                        dispatch({
                            type: LOGIN_FAILED,
                            payload: 'Database offline, silahkan coba beberapa saat lagi'
                        })        
                    )
                }
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



// export const loginUser = ({username, password}) => {
//     return (dispatch) => {
//         dispatch({ type: ON_USER_LOGIN })
//         if(username !== '' && password !== '') {
//             axios.get(API_URL_1 + '/user/loginPrt', {username, password})
//             .then(res => {
//                 localStorage.setItem('token', res.data.token)
//                 dispatch({
//                     type: LOGIN_SUCCESS,
//                     payload: res.data
//                 })
//             }).catch(err => {
//                 console.log(err.response)
//                 dispatch({
//                     type: LOGIN_FAILED,
//                     payload: err.response.data.message
//                 })
//             })
//         } else {
//             dispatch({
//                 type: LOGIN_FAILED,
//                 payload: 'Mohon isi Username dan Password'
//             })
//         }
//     }
// }
