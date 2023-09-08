import { combineReducers } from "redux";
import itemReducer from "./itemReducer";
import cartReducer from "./cartReducer";

const rootReducer = combineReducers({
    itemStore:itemReducer,
    nameStore:cartReducer
})

export default rootReducer