import axios from "axios";
import { API_URL_1 } from "../../helpers/apiurl";
import { INPUT_TEXT, ON_REGISTER_PARENT, CHEKCED_TERMS_REGISTER, REGISTER_FAILED } from "./types";


export const inputText = (prop, value) => {
    console.log(prop,value);
    return {
        type: INPUT_TEXT,
        payload: {prop, value}
    }
}

export const checkUncheck = () => {
    return {type:CHEKCED_TERMS_REGISTER}
}

export const registerParent = (val) => {
    console.log(val);
    
    return (dispatch)=>{
        dispatch({type:ON_REGISTER_PARENT})
        if(val.firstname&&val.lastname&&val.alamat&&val.email&&val.username&&val.password&&val.confPassword&&val.checked){
            if(val.password===val.confPassword){
                axios.post(API_URL_1+'/user/regParent',{
                    firstname: val.firstname,
                    lastname:val.lastname,
                    alamat:val.alamat,
                    email:val.email,
                    username:val.username,
                    password:val.password
                })
            }else{
                dispatch({
                    type: REGISTER_FAILED,
                    payload: 'Password yang anda masukkan berbeda'
                })
            }
        }else{
            dispatch({
                type: REGISTER_FAILED,
                payload: 'Mohon isi semua Form diatas'
            })
        }
    }
}