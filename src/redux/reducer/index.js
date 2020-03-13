import { combineReducers } from "redux";
import userReducer from "./userReducer";
import loginReducer from "./loginReducer";
import profileReducer from "./profileReducer";
import registerReducer from "./registerReducer";
import detailMuridReducer from "./detailMuridReducer";

export default combineReducers ({
    user : userReducer,
    loginForm : loginReducer,
    profile : profileReducer,
    regisForm : registerReducer,
    detailMurid : detailMuridReducer
})