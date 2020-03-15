import axios from "axios";
import { API_URL_1 } from "../../helpers/apiurl";
import { GET_SUCCESS } from "./types";

export const getUserOrtu = () => {
    return (dispatch) =>{
        axios.get(API_URL_1+`/user/allparent`)
        .then(res=>{
            console.log('allParent: ',res.data);
            
            dispatch({
                type : GET_SUCCESS,
                payload : res.data
            })
        })
        .catch(err=>{console.log(err);
        })
    }
}
