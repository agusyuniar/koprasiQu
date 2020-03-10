import {
    INIT_PROFILE_IMAGE
} from '../action/types';

const INITIAL_STATE = {
    ImageProfile:'',
}

export default (state=INITIAL_STATE, action) => {
    switch(action.type) {
        //terima input login
        
        case INIT_PROFILE_IMAGE:
            console.log(action.payload);
            return { ...state,ImageProfile: action.payload }
        default :
            return state
    }
}