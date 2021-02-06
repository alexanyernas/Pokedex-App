import React, { useState } from 'react';
import CardItem from './CardItem';
import { usePokemon } from '../hooks/usePokemon';

const Cards = () => {

    const [ loading, setLoading ] = useState(true);
    const pokemons = usePokemon();

    setTimeout(() => {
        setLoading( false );
    }, 1000);

    return (
        <div>
           {
               loading ? (
                   <p>Loading...</p>
               ) : (
                    pokemons.map( ({ name, sprites } ) => ( 
                        <CardItem 
                            key= { name }
                            data= { { name, sprites } } 
                        />
                    ))
               )
           } 
        </div>
    )
}

export default Cards;