export const LIST ="LIST";
export const REMOVE_POKEMON ="REMOVE_POKEMON";
export const ADD ="ADD";


export function firstPokemonList(list) {
  return {
    type: LIST,
    payload: list
  }
};

export function removePokemon(id) {
  return {
    type: REMOVE_POKEMON,
    payload: id
  }
}

export function addPokemonList(data) {
  return {
    type: ADD,
    payload: data
  }
}


