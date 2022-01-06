import React, { useState, useEffect } from 'react';
import "../styles/cards.css";

export default function CardPlanets(props) {

    let [favorites, setFavorites] = useState([])

    let favoritesList = []
    let newFavorite = {}


    function addFavorite(event, newFavorite, favoriteList) {
        newFavorite = {
            name: event.target.parentElement.querySelector(".card-title").innerText,
            diameter: event.target.parentElement.querySelector("#card-diameter").innerText,
            climate: event.target.parentElement.querySelector("#card-climate").innerText,
            terrain: event.target.parentElement.querySelector("#card-terrain").innerText,/* 
            btnValue: "Remove favorite" */
        }

        favoriteList = favorites
        favoriteList[newFavorite.name] = newFavorite;
        setFavorites({ ...favorites, ...favoriteList })

        localStorage.setItem("StarWarsPlanetsFavorites", JSON.stringify({ ...favorites }))
    }

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
