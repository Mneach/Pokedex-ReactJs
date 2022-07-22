import React from 'react'
import { Link } from 'react-router-dom'
import { PokemonId, PokemonImage, PokemonListCard, PokemonName } from '../components/ListCard'
import { usePokemonListContext } from '../lib/context/PokemonListContext'
import Navbar from './Navbar'

const Favorite = () => {

  const pokemonListContext = usePokemonListContext()
  const pokemonFavorites = pokemonListContext.PokemonFavorite

  return (
    <>
      <Navbar />
      <div className='home__container'>
        {
          pokemonFavorites.length ?
            (
              <div className="home__content__container">
                <div className='home__text__top'>FAVORITE POKEMON</div>
                <div className='pokemon__list__container'>
                  {pokemonFavorites.map((result) => (
                    <Link to={`/PokemonDetail/${result.id}`} className="link__to" key={result.id}>
                      <Link to={`/PokemonDetail/${result.id}`} className="link__to" key={result.id}>
                        <PokemonListCard>
                          <PokemonImage src={result.artwork} ></PokemonImage>
                          <PokemonId>{result.id}</PokemonId>
                          <PokemonName>{result.name}</PokemonName>
                        </PokemonListCard>
                      </Link>
                    </Link>
                  ))}
                </div>
              </div>
            )
            :
            (
              <div>
                THERE IS NO FAVORITE POKEMON
              </div>
            )
        }
      </div>
    </>
  )
}

export default Favorite