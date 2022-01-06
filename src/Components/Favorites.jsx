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

    function RemoveFavorite(event, favoriteList) {
        favoriteList = favorites

        if (favoriteList[event.target.parentElement.querySelector(".card-title").textContent]) {
            console.log("removeItem")
            delete favoriteList[event.target.parentElement.querySelector(".card-title").textContent]

            setFavorites({ ...favoriteList })

            localStorage.setItem("StarWarsPlanetsFavorites", JSON.stringify({ ...favorites }))
        }
    }

    useEffect(() => {
        localStorage.key("StarWarsPlanetsFavorites") && setFavorites(JSON.parse(localStorage.getItem("StarWarsPlanetsFavorites")))
    }, [])
    console.log(favorites)

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
                            {/* <div className="card-body"> */}
                            <button onClick={(e) => {
                                RemoveFavorite(e, favoritesList)
                            }} type="button" className="btn btn-primary btn-add-fav" id={index + 1}>{item.btnValue}</button>
                            {/* </div> */}
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
