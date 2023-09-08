import "./Pokemon.css"

function Pokemon({name, image}){
    return(
    <div className="pokemon">
        <div>{name}</div>
        <div><img src={image} alt="" /></div>
    </div>
    )
}

export default Pokemon;