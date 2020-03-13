import { 
    DETAIL_NIM_SELECT 
} from "../action/types";

export const selectNIMtoGlobal = (val) => {
    console.log(val);
    
    return {
        type : DETAIL_NIM_SELECT,
        payload: val
    }
}