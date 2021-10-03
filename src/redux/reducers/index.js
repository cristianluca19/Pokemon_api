import { LIST, REMOVE_POKEMON, ADD } from '../actions'
const initialState = {
  pokemonList: [],
}


export default function Reducer (state = initialState, action) {
  switch (action.type) {
    case LIST:
      return {
        ...state,
        pokemonList: action.payload,
      }
      case REMOVE_POKEMON:
        let pokemonFilter = state.pokemonList.filter(pokemon => pokemon.id !== action.payload)
        return {
          ...state,
          pokemonList: pokemonFilter,
        }
      case ADD:
        return {
          ...state,
          pokemonList: state.pokemonList.concat(action.payload),
        }
    default:
      return {...state}
  }
}
