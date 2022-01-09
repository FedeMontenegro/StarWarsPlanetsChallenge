import React, { useState, useEffect } from 'react';
import "../styles/cards.css";

export default function CardPlanets(props) {

    //let [favorites, setFavorites] = useState([])

    //let favoritesList = []//Gestiona la lista de registros de favoritos, actualiza el estado de 'favoritos'
    //let newFavorite = {}//Almacena las propiedades del nuevo registro que se va a añadir a favoritos.

    /**
     * 
     * @param {*} event : Captura la caja contenedora del elemento que contiene la información de cada card.
     * @param {*} newFavorite : Almacena un objeto literal con las propiedades del nuevo elemento a insertar en favoritos.
     * @param {*} favoriteList : Almacena la lista de favoritos disponible en localStorage y guarda el nuevo favorito, para luego ser seteado en el estado de 'favoritos'.
     */
    /* function addFavorite(event, newFavorite, favoriteList) {
        newFavorite = {
            name: event.target.parentElement.querySelector(".card-title").innerText,
            diameter: event.target.parentElement.querySelector("#card-diameter").innerText,
            climate: event.target.parentElement.querySelector("#card-climate").innerText,
            terrain: event.target.parentElement.querySelector("#card-terrain").innerText,
        }

        favoriteList = favorites
        favoriteList[newFavorite.name] = newFavorite;
        setFavorites({ ...favorites, ...favoriteList })

        localStorage.setItem("StarWarsPlanetsFavorites", JSON.stringify({ ...favorites }))
    } */

    useEffect(() => {
        localStorage.key("StarWarsPlanetsFavorites") && setFavorites(JSON.parse(localStorage.getItem("StarWarsPlanetsFavorites")))
    }, [])

    return (
        <React.Fragment>

            {props.data.length > 0 ?
                props.data.map((item, index) => {
                    return <div className="card card-container" key={index + 1} >
                        <div className="card-body">
                            <h5 className="card-title">{item.name}</h5>
                        </div>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item" id="card-diameter">Diameter: {item.diameter}</li>
                            <li className="list-group-item" id="card-climate">Climate: {item.climate}</li>
                            <li className="list-group-item" id="card-terrain">Terrain: {item.terrain}</li>
                        </ul>
                        <button onClick={(e) => {
                            addFavorite(e, newFavorite, favoritesList)
                        }} type="button" className="btn btn-primary btn-add-fav" id={index + 1}>Add to favorites</button>
                    </div>

                }) :
                <div className="alert alert-info" role="alert">
                    Cargando...
                </div>
            }

        </React.Fragment>
    )
}
