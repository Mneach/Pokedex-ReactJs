import { useState } from 'react'
import '../lib/css/home.css'
import { usePokemonListContext } from '../lib/context/PokemonListContext'
import { Link } from 'react-router-dom'
import Navbar from './Navbar'
import { PokemonId, PokemonImage, PokemonListCard, PokemonName } from '../components/ListCard'

const Home = () => {

  const pokemonListContext = usePokemonListContext();

  const [search, setSearch] = useState("")

  const PokemonFilterSearch = pokemonListContext.PokemonListData.filter((pokemonListData) => {
    if (search === '') {
      return pokemonListData
    } else {
      return pokemonListData.name.includes(search) || pokemonListData.id === parseInt(search)
    }
  })

  return (
    <>
      <Navbar />
      <div className='home__container'>
        <div className='home__text__top'>SEARCH FOR A POKEMON BY NAME OR USING ITS NATIONAL POKEDEX NUMBER</div>
        <div className='search__input__container'>
          <input type="text" className='search__input' placeholder='Search Name or Pokedex Number' onChange={(e) => setSearch(e.target.value)}></input>
        </div>
        <div className='pokemon__list__container'>
          {PokemonFilterSearch.map((result) => (
            <Link to={`/PokemonDetail/${result.id}`} className="link__to" key={result.id}>
              <PokemonListCard>
                <PokemonImage src={result.artwork} ></PokemonImage>
                <PokemonId>{result.id}</PokemonId>
                <PokemonName>{result.name}</PokemonName>
              </PokemonListCard>
            </Link>
          ))}
        </div>
      </div>
    </>
  )
}

export default Home