import React, {useState, useEffect} from 'react';
import { Route} from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import * as action from '../redux/actions';
import * as utils from '../utils';
import Nav from '../components/Nav.jsx'
import Cards from '../components/Cards.jsx'
import Pokemon from '../components/Pokemon.jsx'
import './App.css';

export default function App() {
//
// Dispatch action to redux
//
const dispatch = useDispatch()

//
// States
//
const [pokemon, setPokemon] = useState(false)
const pokemonList = useSelector(state => state.pokemonList)


//
// Function
//
function onClose(id) {
  dispatch(action.removePokemon(id))
}



useEffect(() => {
  if(!pokemon){
    utils.getPokemonList(pokemon, setPokemon, dispatch)
  }
}, [pokemon, setPokemon, dispatch])


//
// Main Components
//

  return (
    <div className="App">
        <Route path="/" component={Nav}/>
        <Route exact path="/" render={() => <Cards pokemon={pokemonList} onClose={onClose}/>}/>
        <Route exact path='/pokemon/:pokeId' render={({match}) => <Pokemon pokemon={pokemonList.find(p => p.id === parseInt(match.params.pokeId))}/>} />
    </div>
  );
}

