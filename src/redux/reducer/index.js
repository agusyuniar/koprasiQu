import { combineReducers } from "redux";
import userReducer from "./userReducer";
import loginReducer from "./loginReducer";
import profileReducer from "./profileReducer";

export default combineReducers ({
    user : userReducer,
    loginForm : loginReducer,
    profile : profileReducer
})