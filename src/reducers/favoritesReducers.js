import { ADD_FAVORITE, CLEAR_FAVORITES, REMOVE_FAVORITE } from "../types";//Desestructurando acciones

//Cargando favoritos
let initialState = localStorage.key("StarWarsPlanetsFavorites") ? JSON.parse(localStorage.getItem("StarWarsPlanetsFavorites")): {};


/**
 * @param {*} newFavorite: Contiene los datos del nuevo registro que se guardará en favoritos
 * @param {*} favoritesList: Captura la lista de favoritos
 */
function addToFavorites(newFavorite, favoritesList = initialState) {
    //Creando nuevo registro
    favoritesList[newFavorite.name] = {...newFavorite};
    console.log(favoritesList)
    //Sobreescribiendo la información del localStorage
    localStorage.setItem("StarWarsPlanetsFavorites", JSON.stringify({ ...favoritesList }))
}

/**
 * @param {*} name: El nombre del objeto a eliminar
 * @param {*} state: La lista de favoritos en la que se buscará el registro que se debe eliminar
 */
function removeOfFavorites(name, state) {
    //Si el objeto se encuentra state, se lo elimina de la lista
    if (state[name]) {
        delete state[name]

        //Sobreescribiendo información de localStorage
        localStorage.setItem("StarWarsPlanetsFavorites", JSON.stringify({ ...state }))
    }
}

//Esta función elimina todos los registros de favoritos.
function cleanFavorites(){
    localStorage.clear();
}

export const favoritesReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_FAVORITE:
            addToFavorites(action.payload, state)
            return state;
        case REMOVE_FAVORITE:
            removeOfFavorites(action.payload, state)
            return state = {...state};
        case CLEAR_FAVORITES:
            cleanFavorites();
            return state = {};
        default:
            return state;
    }
}