import { useQuery } from '@apollo/client';
import React, { createContext, useContext } from 'react'
import { useParams } from 'react-router-dom';
import { PokemonDetailModel } from '../model/PokemonModel';
import { GET_DETAIL_POKEMON } from '../queries/GetDetailPokemon';
import { usePokemonListContext } from './PokemonListContext';

type Props = {
    children: React.ReactNode | React.ReactFragment;
}

type PokemonDetailProps = {
    PokemonDetailData: PokemonDetailModel
    artWork : string
}

const PokemonDetailContext = createContext<PokemonDetailProps>({
    PokemonDetailData: {
        id: 0,
        name: '',
        types: [],
        stats: []
    },
    artWork : '',
})

export function usePokemonDetailContext(){
    return useContext(PokemonDetailContext)
}

const PokemonDetailProvider: React.FC<Props> = ({ children }) => {

    const { pokemonId } = useParams()

    // const c = pokemonId 
    const pokemonIndex = parseInt(pokemonId as string)
    const pokemonListContext = usePokemonListContext();

    const pokemonName = pokemonListContext.PokemonListData[pokemonIndex - 1].name
    const pokemonArtwork = pokemonListContext.PokemonListData[pokemonIndex - 1].artwork

    const { loading, error, data } = useQuery(GET_DETAIL_POKEMON, {
        variables: {
            pokemonName : pokemonName
        }
    })

    if (loading) return <div>GET POKEMON DETAIL DATA...</div>
    if (error) return <div>ERROR...</div>

    // console.log(data.pokemon.stats[0].base_stat)
    // console.log(data.pokemon.stats[0].stat.name)

    const pokemonDetailQueryData = data.pokemon as PokemonDetailModel

    return (
        <PokemonDetailContext.Provider value = {{ PokemonDetailData : pokemonDetailQueryData , artWork : pokemonArtwork }}>
            {children}
        </PokemonDetailContext.Provider>
    )
}

export default PokemonDetailProvider