import React, { useState } from 'react';
import CardItem from './CardItem';
import { usePokemon } from '../hooks/usePokemon';
import '../styles/Cards.css';

const Cards = () => {

    const [ loading, setLoading ] = useState( true );
    const pokemons = usePokemon();

    setTimeout(() => {
        setLoading( false );
    }, 1000);

    return (
        <div className="card-group">
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