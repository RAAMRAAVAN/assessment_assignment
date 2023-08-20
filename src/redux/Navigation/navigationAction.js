import { FETCH_NAV} from "./navigationTypes";
export const fetchNav=(value)=>{
    return{
        type: FETCH_NAV,
        payload: value
    }
} 