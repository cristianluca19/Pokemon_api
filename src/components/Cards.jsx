import React from 'react';
import Card from './Card.jsx';
import './Cards.css';

export default function Cards({pokemon, onClose}) {

    // const [pokeList, setPokeList] = useState(pokemon);
//
// Main Components
//
    return (
        <div className='cards'>
            {pokemon?.map(p => <Card
                key={p.id}
                id={p.id}
                name={p.name}
                weight={p.weight}
                img={p.sprites.other.dream_world.front_default}
                type={p.types[0].type.name}
                onClose={() => onClose(p.id)}
                /> )}
        </div>
    );
}
