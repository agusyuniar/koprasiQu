import { 
    LOGIN_SUCCESS, LOGOUT_USER 
} from "../action/types";

const INITIAL_STATE = {
    id: 0,
    username: '',
    email: '',
    status: '',
    token: '',
    authchecked: false //autentikasi sdh login/blm saat masuk
}

export default (state=INITIAL_STATE, action) => {
    switch(action.type) {
        case LOGIN_SUCCESS :
            return { ...action.payload, authchecked: true }
        case LOGOUT_USER :
            return { ...INITIAL_STATE, authchecked: true }
        default :
            return state
    }
}