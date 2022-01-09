import { ADD_FAVORITE, CLEAR_FAVORITES, REMOVE_FAVORITE } from "../types";


let favoritesList = localStorage.key("StarWarsPlanetsFavorites") && JSON.parse(localStorage.getItem("StarWarsPlanetsFavorites"))
//let newFavorite = {}

function addFavorite(event, /* newFavorite, */ favoriteList) {
    let newFavorite = {
        //id: event.target.parentElement.querySelector(".btn-add-fav").id,
        name: event.target.parentElement.querySelector(".card-title").innerText,
        diameter: event.target.parentElement.querySelector("#card-diameter").innerText,
        climate: event.target.parentElement.querySelector("#card-climate").innerText,
        terrain: event.target.parentElement.querySelector("#card-terrain").innerText,
        //btnValue: "Remove favorite"
    }

    //favoriteList = favorites
    favoriteList[newFavorite.name] = newFavorite;
    //setFavorites({ ...favorites, ...favoriteList })

    localStorage.setItem("StarWarsPlanetsFavorites", JSON.stringify({ ...favoriteList }))
}

function RemoveFavorite(event, favoriteList) {
    //favoriteList = favorites

    if (favoriteList[event.target.parentElement.querySelector(".card-title").textContent]) {
        console.log("removeItem")
        delete favoriteList[event.target.parentElement.querySelector(".card-title").textContent]

        //setFavorites({ ...favoriteList })

        localStorage.setItem("StarWarsPlanetsFavorites", JSON.stringify({ ...favoriteList }))
    }
}

function ClearFavorites(){
    localStorage.clear();
}

export const shoppingReducer = (state = favoritesList, action) => {
    switch (action.type) {
        case ADD_FAVORITE:
            addFavorite(e, newFavorite, state)
            return state;
        case REMOVE_FAVORITE:
            RemoveFavorite(e, state)
            return state;
    
        case CLEAR_FAVORITES:
            ClearFavorites()
            return state;
        default:
            return state;
    }
}