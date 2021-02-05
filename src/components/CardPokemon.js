import React from 'react';

const CardPokemon = ({ data }) => {
    console.log(data)
    return (
        <>
            <p>{data.name}</p>
        </>
    )
}

export default CardPokemon;