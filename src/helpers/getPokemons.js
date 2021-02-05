const url = `https://pokeapi.co/api/v2/pokemon?limit=10`;
const dataPokemons = [];

export const getPokemons = async() => {
    
    const requestApi = await fetch(url);
    const { results: pokemons } = await requestApi.json();


    pokemons.map( async({ name, url:urlPokemon }) => {
        
        const requestPokemon = await fetch(urlPokemon);
        const { sprites } = await requestPokemon.json();
        const { front_default: img } = sprites;

        dataPokemons.push( { name, img } );
    })

    return dataPokemons;
}
