# Star Wars Planets Challenge

## Consigna

El challenge consiste en desarrollar una app con React 
integrándola con Redux o graphql, que permita 
(usando el API REST de Star Wars [1] para usar con redux o [3] 
para graphql) listar todos los planetas en una lista con 
un paginado de a 10 planetas con las siguientes columnas 
en las cards: nombre, diametro, clima y terreno.
La vista debe permitir buscar por nombre de planeta usando 
un input y un botón cada vez que se hace un click en buscar 
o apretar enter.
La lista de planetas debe permitir también guardar uno o 
más planetas como favoritos en el estado y por último, crear 
una vista para ver los favoritos que hemos guardado.

[1]: https://swapi.dev/documentation

[2]: https://swapi.dev/documentation#search

[3]: https://graphql.org/swapi-graphql/

### React: 

- componentes funcionales y hooks
- usar context api si fuera necesario


### Maquetado: 

- Sobre la parte gráfica presentarlo a libre criterio
- usar flexbox o grid
- styled components o sass


### Será un plus si agregás:

- unit testing
- typescript
- graphql
- async/await
- children props

___

### Tareas completadas

- API REST
- Paginado
- Buscador por nombre
- Favoritos

### Tareas pendientes

- Completar la funcionalidad con Redux.

### Tecnologías empleadas

- ReactJs (componentes funcionales, hooks, props)
- LocalStorage (para persistir los registros de favoritos)
- JavaScript (vanilla, Fetch, async await)
- Bootstrap
- Flexbox (para organizar las cards en filas y columnas)

## Estructura

### Actions:
- ShoppingActions: Contiene el listado de acciones disponibles para ejecutar con Redux.

### Components:
- Contiene todos los componentes necesarios para la interacción del usuario con el proyecto.

* CardPlanets: Recibe la información de cada planeta (props) y la retorna por medio de cards.
* Favorites: En ella se obtienen los registros que se encuentren alojados en LocalStorage y se los renderiza por medio de cards.
* Header: Contiene una navbar (Home, favorites) y un buscador, para filtrar registros por el nombre de cada planeta.
* NotFound: Se renderiza en el caso de que la ruta solicitada no sea encontrada.
* Pagination: Renderiza las cards y una barra de navegación, para poder viajar por las distintas páginas de la aplicación.
* Results: Renderiza el resultado de la búsqueda que se haya realizado.

### Hooks:
- Contiene el hook UseFetch, el cual maneja las peticiones a la API.

### reducers:
- Contiene la lógica necesaria para hacer funcionales las acciones con Redux.

### store
- Contiene configuraciones necesarias para el correcto funcionamiento de Redux.

### types
- Contiene los casos de ejecución para el evento que corresponda (Redux).
