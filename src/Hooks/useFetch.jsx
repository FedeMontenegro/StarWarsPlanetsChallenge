import {useState} from "react";

export default function useFetch(initialState = {}) {

    const [apiResults, setApiResults] = useState(initialState);

    const fetchData = async (url = "https://swapi.dev/api/planets/") => {
      console.log("fetchData")
        try {
            //Realizando solicitud a la API
            const response = await fetch(url);
            const res = await response.json();
            const resultados = await res;
            //Desestructurando la respuesta de la API
            let {next, previous, results} = resultados;
            //Actualizando el estado de los resultados
            setApiResults({next, previous, data: results})
          } catch (error) {
            console.log("Ocurrió un error: " + error)
          }
    }

    return [apiResults, fetchData]
    
}
