const CardFavorites = ({item, removeFavorite}) => {
    return (
        <div className="card card-container">
            <div className="card-body">
                <h5 className="card-title" >{item.name}</h5>
            </div>
            <ul className="list-group list-group-flush">
                <li className="list-group-item" id="card-diameter" >Diameter: {item.diameter}</li>
                <li className="list-group-item" id="card-climate" >Climate: {item.climate}</li>
                <li className="list-group-item" id="card-terrain" >Terrain: {item.terrain}</li>
            </ul>
            <button onClick={(/* event */) => {
                //let name = event.target.parentElement.querySelector(".card-title").textContent
                removeFavorite()
            }} type="button" className="btn btn-primary btn-add-fav">Remove favorite</button>
        </div>
    )
}

export default CardFavorites
