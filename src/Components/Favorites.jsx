import React, { Fragment } from 'react';
import "../styles/cards.css";
//Redux
import {useSelector, useDispatch} from "react-redux";
import {removeFavorite, clearFavorites} from "../Actions/ShoppingActions";
import CardFavorites from "./CardFavorites";


export default function Favorites() {

    const state = useSelector(state => state);
    const dispatch = useDispatch()
    
    let {favorites} = state;

    return (
        <Fragment>
            <h1 className='h1-pagination'>Favoritos</h1>
            <hr />
            <button onClick={() => dispatch(clearFavorites())} type="button" className="btn btn-danger">Clean favorites</button>
            <div className="pagination-container">
                {Object.values(favorites).length > 0 ?
                    Object.values(favorites).map((item, index) => {
                        return <CardFavorites key={index + 1} item={item} removeFavorite={() => dispatch(removeFavorite(item.name))} />
                    }) :
                    <div className="alert alert-info" role="alert">
                        Aún no tienes favoritos.
                    </div>
                }
            </div>
        </Fragment>
    )
}
