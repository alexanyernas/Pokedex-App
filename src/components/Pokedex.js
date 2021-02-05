import React from 'react';
import { usePokemon } from '../hooks/usePokemon';
import CardPokemon from './CardPokemon';

const Pokedex = () => {

    const { data, loading } = usePokemon();

    return (
        <>
            { loading && 'Loading...' }
            
            {
                data.map( act => (
                    <CardPokemon key={ act } data= { act } />
                ))

            }

        </>
    )
}

export default Pokedex;