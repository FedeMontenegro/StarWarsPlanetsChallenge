import { ADD_FAVORITE, CLEAR_FAVORITES, REMOVE_FAVORITE } from "../types";

export const addFavorite = (item) => ({type: ADD_FAVORITE, payload: item});

export const removeFavorite = (name) => ({type: REMOVE_FAVORITE, payload: name});

export const clearFavorites = () => ({type: CLEAR_FAVORITES})