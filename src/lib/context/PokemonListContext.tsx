import { useQuery } from '@apollo/client'
import React, { createContext, useContext } from 'react'
import { GET_ALL_POKEMON } from '../queries/GetAllPokemon'
import { PokemonListModel } from '../model/PokemonModel';

type Props = {
    children: React.ReactNode | React.ReactFragment;
}

type PokemonContextProps = {
    PokemonListData: Array<PokemonListModel>
    PokemonFavorite : Array<PokemonListModel>
}



const gqlVariables = {
    limit: 850,
    offset: 0,
}

export function usePokemonListContext(){
    return useContext(PokemonContext)
}

const PokemonContext = createContext<PokemonContextProps>({
    PokemonListData : [] ,
    PokemonFavorite : []
})


const PokemonListProvider : React.FC<Props> = ({ children }) => {

    const { loading, error, data } = useQuery(GET_ALL_POKEMON, {
        variables: gqlVariables
    })

    if (loading) return <div>Loading...</div>
    if (error) return <div>Error :</div>


    const pokemonListQueryData = data.pokemons.results as Array<PokemonListModel>
    
    return (
        <PokemonContext.Provider value={{ PokemonListData : pokemonListQueryData , PokemonFavorite : [] }}>
            {children}
        </PokemonContext.Provider>
    )
}

export default PokemonListProvider