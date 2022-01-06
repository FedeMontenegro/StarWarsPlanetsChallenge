import {combineReducers} from "redux";
import { shoppingReducer } from "./shoppingReducers";

const reducer = combineReducers({
    shopping: shoppingReducer
});

export default reducer;