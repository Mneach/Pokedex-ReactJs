import '../lib/css/navbar.css'
import {SiPokemon} from 'react-icons/si'
import {AiOutlineHome} from 'react-icons/ai'
import { MdOutlineFavoriteBorder } from 'react-icons/md'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='Navbar__Container'>
        <div className="Left__Navbar__Container">
          <Link to={'/'} className="link__to">
            <span className='Favorite__Icon'><AiOutlineHome size={28}/></span>   
          </Link>            
        </div>
        <div className="Mid__Navbar__Container">
            <span className='Favorite__Icon'><SiPokemon size={80}/></span>  
        </div>
        <div className="Right__Navbar__Container">
          <Link to={'/PokemonFavorite'} className="link__to">
            <span className='Favorite__Icon' ><MdOutlineFavoriteBorder size={28} /></span>  
          </Link>
        </div>
    </div>
  )
}

export default Navbar