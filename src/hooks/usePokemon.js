/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react';

export const usePokemon = (cant = 10) => {
    
    const url = `https://pokeapi.co/api/v2/pokemon/?limit=${cant}`;

    const [ , setResult] = useState([]);
    const [poke, setPoke] = useState([]);  
    const arr = [];
    
    useEffect(() => {
 
        fetch(url)
            
            .then((response) => response.json())
            .then((data) => setResult(
            
            // eslint-disable-next-line array-callback-return
            data.results.map((item) => {
                
                fetch(item.url)
                .then((response) => response.json())
                .then((allpokemon) => arr.push(allpokemon));
                setPoke(arr);
            }),
          
            ));
 
    }, []);

    return poke;
}