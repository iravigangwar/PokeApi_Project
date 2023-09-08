import { useEffect, useState } from "react";
import axios from 'axios';
import "./PokemonList.css"
import Pokemon from "../Pokemon/Pokemon";



function PokemonList() {


    const POKE_DEX_URL = 'https://pokeapi.co/api/v2/pokemon';


    const [pokemonList, setPokemonList] = useState([]);
    const [isLoading, setIsLoading] = useState(true);




    async function downloadPokemons() {
        const response = await axios.get(POKE_DEX_URL);
        const pokemonResults = response.data.results;
        const pokemonResultPromise = pokemonResults.map((pokemon)=> axios.get(pokemon.url));
        const pokemonData = await axios.all(pokemonResultPromise);

        console.log("Pokemon all URLs: ",pokemonData);

        const res = pokemonData.map((pokeData)=>{
            const pokemon = pokeData.data;

            return {
                id: pokemon.id,
                name : pokemon.name, 
                image: pokemon.sprites.other.dream_world.front_default, 
                types: pokemon.types
            }
        });
        console.log(res);

        setPokemonList(res);

        setIsLoading(false);


    }

    useEffect(()=>{
        downloadPokemons();
    }, [])

    return (
        <div className="pokemon-list-wrapper">
           <h3>Pokemon List</h3>

            <div className="pokimon-wrapper">
            {
            (isLoading) ? "loading...." : 
                pokemonList.map((p)=> <Pokemon name={p.name} image={p.image} key={p.id}/>)
            }
            </div>

            <div className="">
                <button>prev</button>
                <button>next</button>

            </div>
            
        </div>
    )
}

export default PokemonList;