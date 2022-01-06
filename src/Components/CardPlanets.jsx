import React, { useState, useRef, useEffect } from 'react';
import "../styles/cards.css";

export default function CardPlanets(props) {

    

    let [favorites, setFavorites] = useState([])

    //useRef
    let ref_id = useRef()
    let ref_name = useRef()
    let ref_diameter = useRef()
    let ref_climate = useRef()
    let ref_terrain = useRef()

    let favoritesList = []
    let newFavorite = {}


    function addFavorite(event, newFavorite, favoriteList) {
        newFavorite = {
            //id: event.target.parentElement.querySelector(".btn-add-fav").id,
            name: event.target.parentElement.querySelector(".card-title").innerText,
            diameter: event.target.parentElement.querySelector("#card-diameter").innerText,
            climate: event.target.parentElement.querySelector("#card-climate").innerText,
            terrain: event.target.parentElement.querySelector("#card-terrain").innerText,
            btnValue: "Remove favorite"
        }

        favoriteList = favorites
        favoriteList[newFavorite.name] = newFavorite;
        setFavorites({ ...favorites, ...favoriteList })

        localStorage.setItem("StarWarsPlanetsFavorites", JSON.stringify({ ...favorites }))
    }

    useEffect(() => {
        localStorage.key("StarWarsPlanetsFavorites") && setFavorites(JSON.parse(localStorage.getItem("StarWarsPlanetsFavorites")))
    }, [])
    console.log(favorites)

    return (
        <React.Fragment>

            {props.data.length > 0 ?
                props.data.map((item, index) => {
                    return <div className="card card-container" key={index + 1} ref={ref_id} >
                        <div className="card-body">
                            <h5 className="card-title" ref={ref_name}>{item.name}</h5>
                        </div>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item" id="card-diameter" ref={ref_diameter}>Diameter: {item.diameter}</li>
                            <li className="list-group-item" id="card-climate" ref={ref_climate}>Climate: {item.climate}</li>
                            <li className="list-group-item" id="card-terrain" ref={ref_terrain}>Terrain: {item.terrain}</li>
                        </ul>
                        {/* <div className="card-body"> */}
                        <button onClick={(e) => {
                            console.log(ref_name)
                            addFavorite(e, newFavorite, favoritesList)
                        }} type="button" className="btn btn-primary btn-add-fav" id={index + 1}>Add to favorites</button>
                        {/* </div> */}
                    </div>

                }) :
                <div className="alert alert-info" role="alert">
                    Cargando...
                </div>
            }

        </React.Fragment>
    )
}
