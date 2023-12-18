import { useState } from "react";
import PokemonList from "../PokemonList/PokemonList";

import Search from "../Search/Search";

import "./Pokedex.css"

function Pokedex() {


    const [searchTerm, setSearchTerm] = useState("");



    return (
        <div className="main-div">
            <Search upadateSearchTerm = {setSearchTerm}/>
            <PokemonList/>
        </div>
    )
}


export default Pokedex;
