import {
    INIT_PROFILE_IMAGE
} from './types';


export const profilePictureState = (img) => {  //kalau gambar berubah
    
    return {
        type: INIT_PROFILE_IMAGE,
        payload: img
    }
}   