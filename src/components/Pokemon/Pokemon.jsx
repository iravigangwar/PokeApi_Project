import { Link } from "react-router-dom";
import "./Pokemon.css"

function Pokemon({name, image, id}){
    return(
    <div className="pokemon relative">
        <h1 className="text-3xl white overflow-y-hidden overflow-hidden text-white absolute bottom-0">{name}</h1>
        <Link to={`/pokemon/${id}`}>
            <img src={image} alt="" />
        </Link>
    </div>
    )
}

export default Pokemon;