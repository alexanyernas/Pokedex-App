import React, { useState } from 'react';
import CardItem from './CardItem';
import { usePokemon } from '../hooks/usePokemon';
import '../styles/Cards.css';
import '../styles/Load.css';
import Footer from './Footer';

const Cards = () => {

    const [ loading, setLoading ] = useState( true );
    const pokemons = usePokemon();

    setTimeout(() => {
        setLoading( false );
    }, 2000);

    return (
        <>
        {
                loading ? (
                    <div className="container-loading">
                        <p className="loading">Loading...</p>
                    </div>
                ) : (
                    <>
                        <div className="container-fluid">
                            <div className="card-deck">
                                {
                                    pokemons.map( ( { name, sprites } ) => (
                                        <CardItem
                                            key= { name }
                                            data= { { name, sprites }}
                                        />
                                    ))
                                }
                            </div>
                        </div>
                        <Footer />
                    </>
                )
            }
        </>
    )
}

export default Cards;