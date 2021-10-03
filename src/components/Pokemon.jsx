import React from "react";

export default function Pokemon({pokemon}) {

//
// Main Components
//
    return (
        <div className='card ' style={{width: '90%', marginLeft:'auto', marginRight:'auto'}}>
            <div className="container">
                <h2>{pokemon.name.toUpperCase()}</h2>
                <img src={pokemon.sprites.other.dream_world.front_default} className="my-5" alt='Pokemon'/>
                <div className="info">
                    <h5>Orden: {pokemon.order} ºC</h5>
                    <h5>Experiencia base: {pokemon.base_experience}</h5>
                    <h5>Cantidad juegos en los que aparece: {pokemon.game_indices.length}</h5>
                    <div className='container'>
                        <div className='row'>
                            <h4 className='col'>Movimientos: </h4>
                            <div className='col'>
                                <ul className="list-group list-group-flush">
                                    {pokemon.moves.map(move => <li className="list-group-item">{move.move.name}</li>)}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
