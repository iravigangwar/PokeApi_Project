import PokemonList from "../PokemonList/PokemonList";
import Search from "../Search/Search";

import "./Pokedex.css"

function Pokedex() {





    return (
        <>
        <div className="pokedex-main-div">
            <h1>Pokedex</h1>
            <Search/>
        </div>
        <PokemonList/>
        </>
    )
}


export default Pokedex;
