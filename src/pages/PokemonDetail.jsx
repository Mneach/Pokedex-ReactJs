import { useEffect, useState } from 'react'
import { MdOutlineFavoriteBorder } from 'react-icons/md';
import { usePokemonDetailContext } from '../lib/context/PokemonDetailContext';
import { usePokemonListContext } from '../lib/context/PokemonListContext';
import '../lib/css/pokemonDetail.css';
import Navbar from './Navbar';
import { MdFavorite } from 'react-icons/md'
import { PokemonCardDetail, PokemonType } from '../components/CardDetail';

const PokemonDetail = () => {

  const PokemonDetailContext = usePokemonDetailContext()
  const PokemonContext = usePokemonListContext()

  const PokemonId = PokemonDetailContext.PokemonDetailData.id

  const checkIsFavorite = () => {
    const isFavorite = PokemonContext.PokemonFavorite.filter((pokemonFavoriteId) => {
      return pokemonFavoriteId.id === PokemonId
    })

    if (!isFavorite.length) return false
    else return true
  }

  const addPokemonFavorite = () => {
    PokemonContext.PokemonFavorite.push(PokemonContext.PokemonListData[PokemonId - 1])
    setFavorite(true)
  }

  const removePokemonFavorite = () => {
    let arr = []
    for (let index = 0; index < PokemonContext.PokemonFavorite.length; index++) {
      if (PokemonContext.PokemonFavorite[index].id !== PokemonId)
        arr.push(PokemonContext.PokemonFavorite[index])
    }
    PokemonContext.PokemonFavorite = arr
    setFavorite(false)
  }

  const MarkAsFavorite = () => {
    if (checkIsFavorite() === false) addPokemonFavorite()
    else removePokemonFavorite()

    console.log(PokemonContext.PokemonFavorite)
  }



  const [favorite, setFavorite] = useState(checkIsFavorite())

  return (
    <>
      <Navbar />
      <div className='PokemonDetail__Container'>
        <PokemonCardDetail>
            <div className="Top__Stats__Container">
              <div className="Pokemon__HP">
                <span className='Pokemon__Stat__Name'>
                  {PokemonDetailContext.PokemonDetailData.stats[0].stat.name}
                </span>
                <span className='Pokemon__Base__Stat'>
                  {PokemonDetailContext.PokemonDetailData.stats[0].base_stat}
                </span>
              </div>
              <div className="favorite__icon" onClick={MarkAsFavorite}>
                {
                  favorite === true ?
                    (<span className='Favorite__Icon'><MdFavorite size={28} /></span>)
                    :
                    (<span className='Favorite__Icon'><MdOutlineFavoriteBorder size={28} /></span>)
                }
              </div>
            </div>
            <div className="Pokemon__Image__Container">
              <img className='Pokemon__Image' src={PokemonDetailContext.artWork} alt="" />
            </div>
            <div className="Pokemon__Name">
              {PokemonDetailContext.PokemonDetailData.name}
            </div>
            <div className="Pokemon__Type__Container">
              {PokemonDetailContext.PokemonDetailData.types.map((pokemonType, i) => (
                <PokemonType pokemonType={pokemonType.type.name}></PokemonType>
              ))}
            </div>
            <div className="Bottom__Stats__Container">
              {
                PokemonDetailContext.PokemonDetailData.stats.map((stats, i) => (
                  i === 1 || i === 2 || i === 5 ?
                    (
                      <div className="Bottom__Pokemon__Stats" key={i}>
                        <span className="Pokemon__Base__Stat">
                          {stats.base_stat}
                        </span>
                        <span className="Pokemon__Stat__Name">
                          {stats.stat.name}
                        </span>
                      </div>
                    )
                    :
                    (
                      <></>
                    )
                ))
              }
            </div>
        </PokemonCardDetail>
      </div>
    </>
  )
}

export default PokemonDetail