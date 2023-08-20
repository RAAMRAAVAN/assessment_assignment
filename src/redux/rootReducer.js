import { combineReducers } from "redux";
import navigationReducer from "./Navigation/navigationReducer";

const rootReducer= combineReducers({
    navigation: navigationReducer,
})
export default rootReducer