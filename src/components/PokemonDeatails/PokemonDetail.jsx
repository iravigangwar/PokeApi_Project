import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function PokemonDetails() {
    const {id} = useParams();
    const [pokemon, setPokemon] = useState({});
    async function downloadPokemon(){
        const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
        setPokemon({

            name: res.data.name,
            image: res.data.sprites.other.dream_world.front_default,
            weight: res.data.weight,
            height: res.data.height,
            types: res.data.types.map((t)=> t.type.name)


        })
    }


    useEffect(()=>{
        downloadPokemon();
    }, []);

return (
    
    <div>
        <div className="pokemon-name">Name: {pokemon.name}</div>
        <div className="pokemon-image" src={pokemon.image} alt="image-not-found"></div>
        <div className="pokemon-height">Height: {pokemon.height}</div>
        <div className="pokemon-weight">Weight: {pokemon.weight}</div>
        <div className="pokemon-types"> Types: 
            {pokemon.types && pokemon.types.map((t)=><div key={t}>{t}</div>)}
        </div>
    </div>
)

}

export default PokemonDetails;