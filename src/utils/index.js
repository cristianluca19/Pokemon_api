import axios from 'axios';
import * as action from '../redux/actions'


export function getPokemonList(pokemon, setPokemon, dispatch) {
    let pokemonList =[] 
    if(!pokemon){
        try {
            axios.get(`https://pokeapi.co/api/v2/pokemon/?limit=10&offset=10`)
            .then(function async (response) {
                try{
                    const pokemonList = response.data.results.map(async (pokemon) => {
                            let response = await axios.get(pokemon.url)
                            .then(function async  (response) {
                                return response.data
                            })
                            return response
                        })
                        Promise.all(pokemonList)
                        .then(function async (total) {  //total is an array of pokemon objects          
                            dispatch(action.firstPokemonList(total))
                            return total
                        })
                        return 
                }
                catch(err){
                    console.log('ERROR',err)
                }
                return pokemonList
            })
        } catch (error) {
            console.log(error);
        } 
    }
    setPokemon(true)
};

export function getPokemonSearch(name, dispatch) {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
        .then(function (response) {
            dispatch(action.addPokemonList(response.data))
        })
        .catch(function (error) {
            window.alert("Pokemon no encontrado")
        }
    );
};

