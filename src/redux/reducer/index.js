import { combineReducers } from "redux";
import userReducer from "./userReducer";
import loginReducer from "./loginReducer";
import profileReducer from "./profileReducer";
import registerReducer from "./registerReducer";

export default combineReducers ({
    user : userReducer,
    loginForm : loginReducer,
    profile : profileReducer,
    regisForm : registerReducer
})