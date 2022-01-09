import React, { useState, useEffect, Fragment } from 'react';
//import UseFavorites from "../Hooks/UseFavorites";
import "../styles/cards.css";
//Redux
import {useSelector, useDispatch} from "react-redux";
import {removeFavorite} from "../Actions/ShoppingActions";

export default function Favorites() {

    const state = useSelector(state => state);
    const dispatch = useDispatch()

    let [favorites, setFavorites] = useState([]);
    //Aquí se guarda el listado de planetas favoritos que se hayan cargado en localStorage.
    let favoritesList = []

    /**
     * 
     * @param {*} event : Captura la caja contenedora del elemento que contiene la información de cada card.
     * @param {*} favoriteList : Recibe el listado de favoritos, elimina el elemento solicitado y luego actualiza el estado de 'favoritos'.
     */
    function RemoveFavorite(event, favoriteList) {
        favoriteList = favorites

        if (favoriteList[event.target.parentElement.querySelector(".card-title").textContent]) {
            delete favoriteList[event.target.parentElement.querySelector(".card-title").textContent]
            setFavorites({ ...favoriteList })
            localStorage.setItem("StarWarsPlanetsFavorites", JSON.stringify({ ...favorites }))
        }
    }

    useEffect(() => {
        localStorage.key("StarWarsPlanetsFavorites") && setFavorites(JSON.parse(localStorage.getItem("StarWarsPlanetsFavorites")))
    }, [])

    return (
        <Fragment>
            <h1 className='h1-pagination'>Favoritos</h1>
            <hr />
            <div className="pagination-container">
                {Object.values(favorites).length > 0 ?
                    Object.values(favorites).map((item, index) => {
                        return <div className="card card-container" key={index + 1} removeFavorite={()=> dispatch(removeFavorite())}>
                            <div className="card-body">
                                <h5 className="card-title" >{item.name}</h5>
                            </div>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item" id="card-diameter" >Diameter: {item.diameter}</li>
                                <li className="list-group-item" id="card-climate" >Climate: {item.climate}</li>
                                <li className="list-group-item" id="card-terrain" >Terrain: {item.terrain}</li>
                            </ul>
                            <button onClick={(e) => {
                                RemoveFavorite(e, favoritesList)
                            }} type="button" className="btn btn-primary btn-add-fav" id={index + 1}>Remove favorite</button>
                        </div>

                    }) :
                    <div className="alert alert-info" role="alert">
                        Aún no tienes favoritos.
                    </div>
                }

            </div>
        </Fragment>
    )
}
