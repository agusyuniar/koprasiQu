import axios from "axios";
import { API_URL_1 } from "../../helpers/apiurl";
import { GET_PRODUCT_SUCCESS, GET_PARENT_SUCCESS } from "./types";

export const getUserOrtu = () => {
    return (dispatch) =>{
        axios.get(API_URL_1+`/user/allparent`)
        .then(res=>{
            console.log('allParent: ',res.data);
            
            dispatch({
                type : GET_PARENT_SUCCESS,
                payload : res.data
            })
        })
        .catch(err=>{console.log(err);
        })
    }
}

export const getProduct = () => {
    return (dispatch) => {
        axios.get(API_URL_1+'/product/getproduct')
        .then(res=>{
            console.log('allProduct: ',res.data);
            dispatch({
                type : GET_PRODUCT_SUCCESS,
                payload : res.data
            })
        })
        .catch(err=>{console.log(err);
        })
    }
}