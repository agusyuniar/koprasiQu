import { GET_SUCCESS } from "../action/types";

const INITIAL_STATE = {
    dataParent : [],
    dataMurid : []
}

export default (state=INITIAL_STATE,action)=>{
    switch (action.type) {
        case GET_SUCCESS : 
            return {
                dataParent:action.payload
            }
        default :
            return state
    }
}