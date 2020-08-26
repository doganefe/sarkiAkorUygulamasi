import React,{useReducer} from 'react'
import './header.css'
import { Link } from 'react-router-dom'
import { useStateValue } from '../../StateProvider'

function Header() {
  const [{user}]  = useStateValue()
  return (
    <div className="wrapper">
      <div className="header">
        <Link to="/" className="header__logo">
          <img src="https://cdn3.iconfinder.com/data/icons/hobby-2/64/guitar-play-music-instrument-512.png" alt="" />
        </Link>
        <div className="navbar">
          <Link to="/spotify">
            <h4>Spotify top 50</h4>
          </Link>
          <Link to="/login"> {!user ? <h4>Sign In</h4> : <h4>Profilim</h4> } </Link>
        </div>
      </div>
    </div>
  )
}

export default Header
