import axios from "axios";
import { API_URL_1 } from "../../helpers/apiurl";
import { GET_PRODUCT_SUCCESS } from './types';

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