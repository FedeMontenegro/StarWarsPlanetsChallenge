//Importando estilos
import "../styles/pagination.css";
//----------------------------------------------------------------------
//Importando componentes de React
import React, { useState, useEffect, useRef } from 'react';
//----------------------------------------------------------------------
//Importando componentes
import CardPlanets from "./CardPlanets";
//----------------------------------------------------------------------
//Importando Hooks
import UseFetch from "../Hooks/useFetch";
//Redux
import {useSelector, useDispatch} from "react-redux";
import {addFavorite} from "../Actions/ShoppingActions";

export default function Pagination() {

    const state = useSelector(state => state);
    const dispatch = useDispatch()

    //Desestructurando UseFetch
    let [apiResults, fetchData] = UseFetch({ next: "", previous: "", data: [] });
    //Desestructurando resultados...
    const { next, previous, data } = apiResults;

    //Referencia
    let v_pageRefA = useRef();
    let v_pageRefB = useRef();
    let v_pageRefC = useRef();

    let url = "https://swapi.dev/api/planets/?page=";

    //Preparando el estado del paginado
    let [pages, setPages] = useState({
        pageA: 1,
        pageB: 2,
        pageC: 3
    })

    //Desestructurando pages
    let { pageA, pageB, pageC } = pages;

    //Esta función actualiza el estado del componente Pagination, cada vez que se presione el botón 'next'
    function nextPage() {
        if (pageC < 6) {
            setPages(pages = {
                pageA: pageA + 1,
                pageB: pageB + 1,
                pageC: pageC + 1
            })

        }
    }

    //Esta función actualiza el estado del componente Pagination, cada vez que se presione el botón 'previous'
    function previousPage() {
        if (pageA > 0) {
            setPages(pages = {
                pageA: pageA - 1,
                pageB: pageB - 1,
                pageC: pageC - 1
            })
        }
    }

    /**
     * Función que tiene como objetivo pintar de azul el número de página que esté
     * seleccionada. Por defecto, la página seleccionada es la 1.
     * 
     * @param {*} v_1 : El elemento del DOM al que se le asignará la clase 'active'
     * @param {*} v_2 : El elemento del DOM al que se le removerá la clase 'active'
     * @param {*} v_3 : El elemento del DOM al que se le removerá la clase 'active'
     */
    function activePage(v_1, v_2, v_3) {
        v_1.current.classList.add("active")
        v_2.current.classList.remove("active")
        v_3.current.classList.remove("active")
    }

    useEffect(() => {
        console.log("useEffect")
        fetchData()//Ejecutando la petición a la API
        activePage(v_pageRefA, v_pageRefB, v_pageRefC)
    }, [])


    return (
        <React.Fragment>
            <h1 className="h1-pagination">Planets List</h1>
            <hr />
            <div className="pagination-container">
                <CardPlanets data={[...data]} addFavorite={()=> dispatch(addFavorite())}/>
            </div>
            <nav className='nav-container' aria-label="...">
                <ul className="pagination">
                    <li className={pageA === 1 ? "page-item disabled" : "page-item"}>
                        <button className="page-link"
                            onClick={() => {
                                fetchData(previous)
                                previousPage()
                            }}>Previous</button>
                    </li>

                    <li ref={v_pageRefA} className="page-item" >
                        <span className="page-link" onClick={() => {
                            fetchData(url + pageA)
                            activePage(v_pageRefA, v_pageRefB, v_pageRefC)
                        }} id={pageA}>{pageA}</span>
                    </li>

                    <li ref={v_pageRefB} className="page-item" aria-current="page" >
                        <span className="page-link" onClick={() => {
                            fetchData(url + pageB)
                            activePage(v_pageRefB, v_pageRefA, v_pageRefC)
                        }} id={pageB}>{pageB}</span>
                    </li>

                    <li ref={v_pageRefC} className="page-item" >
                        <span className="page-link" onClick={() => {
                            fetchData(url + pageC)
                            activePage(v_pageRefC, v_pageRefA, v_pageRefB)
                        }} id={pageC}>{pageC}</span>
                    </li>

                    <li className={pageC === 10 ? "page-item disabled" : "page-item"}
                        onClick={() => {
                            fetchData(next)
                            nextPage()
                        }}>
                        <button className="page-link">Next</button>
                    </li>
                </ul>
            </nav>
        </React.Fragment>
    )
}
