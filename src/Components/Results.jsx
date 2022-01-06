import React, {useEffect} from 'react';
import {useParams} from "react-router-dom";
import UseFetch from "../Hooks/useFetch";

export default function Results() {
    
    let urlSearch = "https://swapi.dev/api/planets/?search=";
    let {results} = useParams();
    let [apiResults, fetchData, search, setSearch] = UseFetch({ next: "", previous: "", data: []});
    console.log(useParams())

    useEffect(() => {
        /* setSearch(results)
        console.log(search) */
        fetchData(urlSearch + results)
    }, [results])

    return (
        <React.Fragment>
            {apiResults.data.length > 0 ?
                apiResults.data.map((item, index) => {
                    return <div className="card card-container" key={index+1}>
                        <div className="card-body">
                            <h5 className="card-title">{item.name}</h5>
                        </div>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">Diameter: {item.diameter}</li>
                            <li className="list-group-item">Climate: {item.climate}</li>
                            <li className="list-group-item">Terrain: {item.terrain}</li>
                        </ul>
                        <div className="card-body">
                            <button type="button" className="btn btn-primary">Add to favorites</button>
                        </div>
                    </div>

                }) :
                <div>No se encontraron resultados.</div>
            }
        </React.Fragment>
    )
}
