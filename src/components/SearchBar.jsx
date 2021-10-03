import React, { useState } from "react";
import { useDispatch } from 'react-redux';
import * as utils from '../utils';

export default function SearchBar({onSearch}) {

//
// Dispatch 
//
  const dispatch = useDispatch()
//
// States
//
  const [pokemon, setPokemon] = useState("");

//
// Functions
//
  onSearch = (name) => {
    utils.getPokemonSearch(name, dispatch)
  }
//
// Main Components
//
  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      onSearch(pokemon);
      setPokemon('')
    }}>
      <input
        type="text"
        placeholder="Pokemon..."
        value={pokemon}
        onChange={e => setPokemon(e.target.value)}
      />
      <input type="submit" value="Agregar" />
    </form>
  );
}
