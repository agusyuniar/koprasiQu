import axios from "axios";
import { API_URL_1 } from "../../helpers/apiurl";
import {
    INPUT_EDIT_TEXT,
    INPUT_ADD_MURID_TEXT,
    EDIT_SUCCESS,
    EDIT_FAILED,
} from "./types";


export const inputEditText = (prop, value) => {
    console.log('inEditTxt: ', prop, value);
    return {
        type: INPUT_EDIT_TEXT,
        payload: { prop, value }
    }
}
export const inputStudentText = (prop, value) => {
    console.log('inEditTxt: ', prop, value);
    return {
        type: INPUT_ADD_MURID_TEXT,
        payload: { prop, value }
    }
}

export const submitEdit = (val) => {
    console.log('valSubmitEdit: ',val);
    
    return (dispatch) => {
        axios.post(API_URL_1 + '/user/editParent', {
            id:val.id,
            verified: val.verified,
            username: val.username,
            firstname: val.firstname,
            lastname: val.lastname,
            alamat: val.alamat,
            email: val.email,
            role_id: val.role_id,
            profil_img: val.profil_img
        })
        .then(res=>{
            console.log('edit passed',res);
            dispatch({
                type:EDIT_SUCCESS
            })
        })
        .catch(err=> {
            console.log(err.response.data.message);
            dispatch({
                type: EDIT_FAILED,
                payload: err.response.data.message
            })
        })
    }
}

/*lgsg di page*/
export const addProduct = () => {
    return (dispatch)=>{
        // var formData = new FormData()
        // formData.append('image',this.props.adminEdit.product_img) 
        // axios.post(API_URL_1+'/product/addProduct', this.props.adminEdit
        // // {
        // //     nama_product:val.nama_product,
        // //     deskripsi:val.deskripsi,
        // //     img_path:val.product_img
        // // }
        // )
        // .then(res=>{console.log('sukses',res)
        // })
        // .catch(err=>{console.log('gagal',err)
        // })
        dispatch({
            type: EDIT_SUCCESS
        })
    }
}
export const editProduct = (val) => {
    return (dispatch) => {
        axios.post(API_URL_1 + `/product/editProduct`,{
            id:val.id,
            nama_product:val.nama_product,
            deskripsi:val.deskripsi,
            stock:val.stock,
            harga:val.harga
        })
        .then(res => {
            console.log('sukses', res)
            dispatch({
                type:EDIT_SUCCESS
            })
        })
        .catch(err => {
            console.log('gagal', err)
        })
    }
}
export const deleteProduct = (id) => {
    return (dispatch)=>{
        axios.delete(API_URL_1+`/product/deleteProduct/${id}`)
        .then(res=>{console.log('sukses',res)
        })
        .catch(err=>{console.log('gagal',err)
        })
    }
}

export const submitEditMurid = (value) => {
    console.log('valSubmitEditmrd: ',value);
    
    return (dispatch) => {
        axios.put(API_URL_1 + '/user/editstudent', {
            id:value.id,
            nim: value.nim,
            firstname: value.firstname,
            lastname: value.lastname,
            alamat: value.alamat,
            email_ortu: value.email_ortu,
            profil_img: value.profil_img
        })
        .then(res=>{
            console.log('edit passed',res);
            dispatch({
                type:EDIT_SUCCESS
            })
        })
        .catch(err=> {
            console.log(err.response.data.message);
            dispatch({
                type: EDIT_FAILED,
                payload: err.response.data.message
            })
        })
    }
}
