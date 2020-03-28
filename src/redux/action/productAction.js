import axios from "axios";
import { API_URL_1 } from "../../helpers/apiurl";
import { GET_PRODUCT_SUCCESS, GET_PRODUCT_DETAIL_SUCCESS, GET_CART_SUCCESS, GET_TRANSACTION_SUCCESS, INPUT_SEARCH, GET_PRODUCT_SEARCH_SUCCESS } from './types';

export const getProduct = () => {
    return (dispatch) => {
        axios.get(API_URL_1+'/product/getProduct')
        .then(res=>{
            console.log(res.data);
            dispatch({
                type : GET_PRODUCT_SUCCESS,
                payload: res.data
            })
        })
        .catch(err=>{
            console.log(err);
        })
    }
}

export const inputSearch = (search) => {
    return {
        type : INPUT_SEARCH,
        payload  : search
    }
}
export const searchProductbyName = (search) => {
    console.log(search);
    
    return (dispatch) => {
        axios.get(API_URL_1+`/product/searchProductbyName/${search}`)
        .then(res=>{
            console.log(res.data);
            dispatch({
                type : GET_PRODUCT_SEARCH_SUCCESS,
                payload: res.data
            })
        })
        .catch(err=>{
            console.log(err);
        })
    }
}
export const getProductByID=(id)=>{
    return(dispatch)=>{
        axios.get(API_URL_1+`/product/getProductByID/${id}`)
        .then(res=>{
            console.log(res.data);
            dispatch({
                type : GET_PRODUCT_DETAIL_SUCCESS,
                payload: res.data
            })
        })
        .catch(err=>{
            console.log(err);
        })
    }
}

export const getCartbyParent=(id)=>{
    return(dispatch)=>{
        axios.get(API_URL_1+`/product/cartByParent/${id}`)
        .then(res=>{
            dispatch({
                type : GET_CART_SUCCESS,
                payload : res.data
            })
        })
        .catch(err=>{console.log(err);
        })
    }
}

export const getTransaction=(id)=>{
    return(dispatch)=>{
        axios.get(API_URL_1+`/product/gettransaction/${id}`)
        .then(res=>{
            dispatch({
                type : GET_TRANSACTION_SUCCESS,
                payload : res.data
            })
        })
        .catch(err=>{console.log(err);
        })
    }
}

export const deleteCartbyID=(id)=>{
    return(dispatch)=>{
        axios.delete(API_URL_1+`/product/deleteCartId/${id}`)
        .then(res=>{console.log('delete success');
        
        })
        .catch(err=>{console.log(err);
        })
    }
}
export const CartCheckout=(id_murid,product_id,id_ortu)=>{
    return(dispatch)=>{
        axios.put(API_URL_1+`/product/chekcoutCart`,{id_murid,product_id,id_ortu})
        .then(res=>{console.log('checkout success');
        
        })
        .catch(err=>{console.log(err);
        })
    }
}