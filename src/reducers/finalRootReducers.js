import { combineReducers } from "redux";
import finalCartReducer from "./finalCartReducer";
import finalItemReducer from "./finalItemReducer";

const finalReducer = combineReducers ({
    itemStore: finalItemReducer,
    cartStore : finalCartReducer
})

export default finalReducer