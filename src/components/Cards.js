import React, { useState } from 'react';
import CardItem from './CardItem';
import { usePokemon } from '../hooks/usePokemon';
import '../styles/Cards.css';
import '../styles/Load.css';

const Cards = () => {

    const [ loading, setLoading ] = useState( true );
    const pokemons = usePokemon();

    setTimeout(() => {
        setLoading( false );
    }, 1000);

    return (
        <>
        {
                loading ? (
                    <div className="container-loading">
                        <p className="loading">Loading...</p>
                    </div>
                ) : (
                    <div className="card-group">
                        {
                            pokemons.map( ( { name, sprites } ) => (
                                <CardItem
                                    key= { name }
                                    data= { { name, sprites }}
                                />
                            ))
                        }
                    </div>
                )
            }
        </>
    )
}

export default Cards;