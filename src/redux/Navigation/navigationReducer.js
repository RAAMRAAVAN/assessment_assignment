import { FETCH_NAV } from "./navigationTypes";

const initialState={
    page:"dashboard",
}
const navigationReducer=(state=initialState,action)=>{
    switch(action.type)
    {
        case FETCH_NAV:
            return{
                ...state,
                page:action.payload
            }    
        default: return(state);       
    }
}
export default navigationReducer;