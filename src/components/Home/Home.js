import React from 'react'
import './Home.css'
import ArtistList from './../Artists/ArtistList'
import Showcase from './../Showcase/Showcase'
function Home() {
  return (
    <div className="home">
      <Showcase />
      <ArtistList />
    </div>
  )
}

export default Home