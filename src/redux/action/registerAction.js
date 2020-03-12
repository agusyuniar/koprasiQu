import axios from "axios";
import { API_URL_1 } from "../../helpers/apiurl";
import {  INPUT_TEXT, ON_REGISTER_PARENT, CHEKCED_TERMS_REGISTER, REGISTER_FAILED, REGISTER_SUCCESS, HIDE_UNHIDE, LOGIN_SUCCESS } from "./types";


export const inputText = (prop, value) => {
    console.log(prop,value);
    return {
        type: INPUT_TEXT,
        payload: {prop, value}
    }
}

export const hideUnhide = () => {
    return {type : HIDE_UNHIDE}
}

export const checkUncheck = () => {
    return {type:CHEKCED_TERMS_REGISTER}
}


export const registerParent = (val) => {
    console.log(val.firstname);
    return (dispatch)=>{
        dispatch({type:ON_REGISTER_PARENT})
        if(val.firstname&&val.lastname&&val.alamat&&val.email&&val.username&&val.password&&val.confPassword){
            if(val.password===val.confPassword){
                if(val.checked===true){
                    axios.post(API_URL_1+'/user/regParent',{
                        firstname: val.firstname,
                        lastname:val.lastname,
                        alamat:val.alamat,
                        email:val.email,
                        username:val.username,
                        password:val.password
                    })
                    console.log('regis success');
                    dispatch({
                        type:REGISTER_SUCCESS
                    })
                } else {
                    console.log('belum di centang');
                    dispatch({
                        type: REGISTER_FAILED,
                        payload: 'Silakan centang setuju untuk melanjutkan registrasi'
                    })
                }
                
            }else{
                console.log('regis gagal beda pass');
                dispatch({
                    type: REGISTER_FAILED,
                    payload: 'Konfirmasi password yang anda masukkan berbeda'
                })
            }
        }else{
            console.log('regis gagal blm diisi');
            dispatch({
                type: REGISTER_FAILED,
                payload: 'Semua form harus diisi'
            })
        }
    }
}

export const verifyEmail = (token) => {
    console.log(token);
    
    return (dispatch) => {
        console.log('kirimToken : ',token);
        
        axios.post(API_URL_1 + '/user/emailVerification', { token })
        
            .then((res) => {
                console.log(res.data.token)
                localStorage.setItem('ptoken', res.data.token)
                dispatch({
                    type: LOGIN_SUCCESS,
                    payload: res.data 
                })
            }).catch((err) => {
                console.log(err)
                dispatch({
                    type: REGISTER_FAILED
                })
            })
    }
}