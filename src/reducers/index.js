import {combineReducers} from "redux";
import { favoritesReducer } from "./favoritesReducers";

const reducer = combineReducers({
    favorites: favoritesReducer
});

export default reducer;