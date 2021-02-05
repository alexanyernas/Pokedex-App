import { useState, useEffect } from 'react';
import { getPokemons } from '../helpers/getPokemons';

export const usePokemon = () => {

    const [ state, setSate ] = useState({
        data: [],
        loading: true
    });

    useEffect(() => {
        getPokemons()
            .then( dataPokemons => {
                setSate({
                    data: dataPokemons,
                    loading: false
                });
            });
    }, []);

    return state;
}