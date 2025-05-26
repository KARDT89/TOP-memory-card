import React, {useEffect, useState} from 'react';
import axios from "axios";

const Card = ({url, name, onClick}) => {
    const [pokemonImage, setPokemonImage] = useState(null);
    useEffect(() => {
        async function getPokemon() {
            try {
                const response = await axios.get(url);
                const data = response.data;
                setPokemonImage(data.sprites.front_default);
            } catch (err) {
                console.error('Error fetching Pokémon:', err);
            }
        }
        getPokemon()
    },[url])
    return (
        <div className={'border w-[150px] h-[200px] lg:w-[250px] lg:h-[300px]'} onClick={onClick}>
            <div>
                <img src={pokemonImage} alt={name} className="w-full h-full object-fill transform transition-transform duration-300 hover:scale-110"/>
                <h1 className={'text-2xl text-center'}>{name}</h1>
            </div>
        </div>
    );
};

export default Card;