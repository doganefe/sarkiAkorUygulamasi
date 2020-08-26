import React from 'react'
import './Artist.css'
import {Link} from 'react-router-dom'
function Artist({name,photo}) {
  return (
    <Link to={`/sanatcilar/${name}`}>
    <div className="artist">
      <img className="artist__avatar" src={photo} alt="" />
      <p className="artist__name">{name}</p>
    </div>
    </Link>
  )
}

export default Artist
