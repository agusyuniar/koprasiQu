import axios from 'axios';
import { API_URL_1 } from '../../helpers/apiurl'
import {
    INIT_PROFILE_IMAGE
} from './types';


export const profilePictureState = (img) => {  //kalau gambar berubah
    
    return {
        type: INIT_PROFILE_IMAGE,
        payload: img
    }
}   