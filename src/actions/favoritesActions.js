import { ADD_FAVORITE, CLEAR_FAVORITES, REMOVE_FAVORITE } from "../types";

export const addFavorite = () => ({type: ADD_FAVORITE, payload: e});

export const removeFavorite = () => ({type: REMOVE_FAVORITE, payload: e});

export const clearFavorites = () => ({type: CLEAR_FAVORITES})