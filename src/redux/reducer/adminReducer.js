import {
    INPUT_EDIT_TEXT,
    EDIT_SUCCESS,
    EDIT_FAILED
} from "../action/types";

const INITIAL_STATE = {
    // id : null,
    // verified: null,
    // username: null,
    // firstname: null,
    // lastname: null,
    // alamat: null,
    // email: null,
    // role_id: null,
    // profil_img:null,
    // error : null
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case INPUT_EDIT_TEXT:           
            return { ...state, [action.payload.prop]: action.payload.value }
        case EDIT_FAILED:
            return { ...state}
        case EDIT_SUCCESS:
            return { ...INITIAL_STATE }
        default: 
            return state
    }
}