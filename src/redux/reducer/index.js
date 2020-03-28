import { combineReducers } from "redux";
import userReducer from "./userReducer";
import loginReducer from "./loginReducer";
import profileReducer from "./profileReducer";
import registerReducer from "./registerReducer";
import detailMuridReducer from "./detailMuridReducer";
import productReducer from "./productReducer";
import getDataAdminReducer from "./getDataAdminReducer";
import adminReducer from "./adminReducer";
import addStudentReducer from "./addStudentReducer";
import categoryReducer from "./categoryReducer";

export default combineReducers ({
    user : userReducer,
    loginForm : loginReducer,
    profile : profileReducer,
    regisForm : registerReducer,
    detailMurid : detailMuridReducer,
    productReducer : productReducer,
    getData : getDataAdminReducer,
    adminEdit : adminReducer,
    addStudent : addStudentReducer,
    categoryReducer : categoryReducer
})