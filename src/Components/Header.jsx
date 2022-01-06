import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
//Importando estilos
import "../styles/header.css";

export default function Header() {

    let v_ref = useRef();
    let v_toggle = useRef()
    let [route, setRoute] = useState("");

    //Actualiza el parámetro que será enviado mediante la url a la vista de resultados de la búsqueda.
    function btnSearch(e) {
        e.preventDefault();
        route += v_ref.current.value;
    }

    function ToggleBurguerMenu(){
        v_toggle.current.classList.toggle("active-burguer")
    }

    return (
        <header className='header-star-wars'>
            <nav className="navbar navbar-expand-lg navbar-light bg-light navbar-header">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">StarWarsPlanets</Link>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/favorites">Favorites</Link>
                                </li>
                            </ul>
                        </div>
                    <form onClick={(e) => btnSearch(e)} className="d-flex">
                        <input onKeyDown={() => {
                            setRoute(v_ref.current.value)
                        }} className="form-control me-2" type="search" placeholder="Search" aria-label="Search" ref={v_ref}/>
                        <Link to={`/search/${route}`}>
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </Link>
                    </form>
                    <button onClick={ToggleBurguerMenu} className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon">
                        <div className="navbar-burguer" id="navbarNav" ref={v_toggle}>
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/favorites">Favorites</Link>
                            </li>
                        </ul>
                    </div>
                        </span>
                    </button>
                    </div>
            </nav>
        </header>
    )
}
