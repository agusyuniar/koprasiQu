import axios from "axios";
import { API_URL_1 } from "../../helpers/apiurl";
import { GET_PRODUCT_CATEGORY_SUCCESS, SELECTED_CATEGORY } from "./types";

export const pilihanCategory = (id) =>{
    return {
        type : SELECTED_CATEGORY,
        payload  : id
    }
}

export const getProductByPilihanCategory = () => {
    return (dispatch) => {
        axios.get(API_URL_1+'/category/getAllProductLeafCat')
        .then(res=>{
            dispatch({
                type : GET_PRODUCT_CATEGORY_SUCCESS,
                payload : res.data
            })
        })
        .catch(err=>{console.log(err);
        })
    }
}

export const getProductCatbyCategoryID = (idcategory) => {
    console.log(idcategory);
    
    return (dispatch) =>{
        axios.get(API_URL_1+`/category/getProductCatbyCategoryID/${idcategory}`)
        .then(res=>{
            console.log('CATEGORYPRODUCT: ',res.data);
            
            dispatch({
                type : GET_PRODUCT_CATEGORY_SUCCESS,
                payload : res.data
            })
        })
        .catch(err=>{console.log(err);
        })
    }
}