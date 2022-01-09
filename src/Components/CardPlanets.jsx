import React from "react";
import "../styles/cards.css";

export default function CardPlanets({ data, addFavorite }) {

    let {name, diameter, climate, terrain} = data;
    
    return (
        <React.Fragment>
            <div className="card card-container" >
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item" id="card-diameter">Diameter: {diameter}</li>
                    <li className="list-group-item" id="card-climate">Climate: {climate}</li>
                    <li className="list-group-item" id="card-terrain">Terrain: {terrain}</li>
                </ul>
                <button onClick={() => {
                    /* let newFavorite = {
                        name: event.target.parentElement.querySelector(".card-title").innerText,
                        diameter: event.target.parentElement.querySelector("#card-diameter").innerText,
                        climate: event.target.parentElement.querySelector("#card-climate").innerText,
                        terrain: event.target.parentElement.querySelector("#card-terrain").innerText,
                    } */
                    addFavorite()
                }} type="button" className="btn btn-primary btn-add-fav">Add to favorites</button>
            </div>

        </React.Fragment>
    )
}
