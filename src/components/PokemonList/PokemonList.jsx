import { useEffect, useState } from "react";
import axios from 'axios';
import "./PokemonList.css"
import Pokemon from "../Pokemon/Pokemon";



function PokemonList() {
    const [pokemonUrl, setPokemonUrl] = useState("https://pokeapi.co/api/v2/pokemon");
    const [pokemonList, setPokemonList] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [nextUrl, setNextUrl] = useState("");
    const [prevUrl, setPrevUrl] = useState("");




    async function downloadPokemons() {
        setIsLoading(true)
        const response = await axios.get(pokemonUrl);
        const pokemonResults = response.data.results;
        const pokemonResultPromise = pokemonResults.map((pokemon)=> axios.get(pokemon.url));
        const pokemonData = await axios.all(pokemonResultPromise);

        const res = pokemonData.map((pokeData)=>{
            const pokemon = pokeData.data;

            return {
                id: pokemon.id,
                name : pokemon.name, 
                image: pokemon.sprites.other.dream_world.front_default, 
                types: pokemon.types
            }
        });
        setPokemonList(res);
        setIsLoading(false);
        setNextUrl(response.data.next);
        setPrevUrl(response.data.previous);
    }


    useEffect(()=>{
        downloadPokemons();
    }, [pokemonUrl])

    return (
        <div className="pokemon-list-wrapper">
                {(isLoading) ? <h1 className="absolute top-1/2 right-1/2 text-7xl text-white">Loading...</h1> : pokemonList.map((p)=> <Pokemon name={p.name} image={p.image} key={p.id} id={p.id}/>)}
            <div className="btns">
                <button className="btnss" disabled={prevUrl == null } onClick={()=> setPokemonUrl(prevUrl)}>prev</button>
                <button className="btnss"  disabled={nextUrl == null } onClick={()=> setPokemonUrl(nextUrl)}>next</button>
            </div>
            
        </div>
    )
}

export default PokemonList;