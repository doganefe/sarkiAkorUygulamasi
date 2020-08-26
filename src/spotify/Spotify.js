import React, { useState, useEffect } from 'react'
import axios from 'axios'
import qs from 'qs';
import './Spotify.css'
function Spotify() {
  const [token, setToken] = useState("")
  const [items, setItems] = useState([])
  const [counter,setCounter] = useState(0)
  useEffect(() => {
    
    const url = "https://accounts.spotify.com/api/token"

    const body = {
      grant_type: "client_credentials",
    }
    const headers = {
      header: {
        Accept: 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      auth: {
        username: "842cb59e96484fe5a53e0a76d1c23891",
        password: "2aabd72cf3a9460eab369952bc51416a"
      }
    }
    //IN ORDER TO OBTAIN TOKEN
    axios
      .post(url, qs.stringify(body), headers)
      .then(resp => {
        setToken(resp.data.access_token)
      })
      .catch(err => console.log(err.message))

  }, [])


  useEffect(() => {
    setCounter(counter+1)
    console.log(counter)
    //GET PLAYLIST
    if (token) {
      const config = {
        headers: {
          Authorization: `Bearer ${token}`
        },
        params: {
          market: "TR"
        }
      }


      axios
        .get(
          "https://api.spotify.com/v1/playlists/37i9dQZEVXbIVYVBNw9D5K/tracks",
          config,
        )
        .then(resp => {
          console.log(resp)
          setItems(resp.data.items)
        })
        .catch(err => console.log(err.message))
    }
  }, [token])

  const sarkiListesi = items.map((item, _) => {
    return (
      <div className="album" key={_}>
        <h4 className="album__artistName">{_ + 1}){item.track.artists.map(artist => artist.name + "  ")}</h4>
        <p>{item.track.name}</p>
        <img className="album__resim" src={item.track.album.images[1].url} alt="" />
      </div>
    )
  })
  return (

    <div className="artistlist">
      <h2>En çok dinlenen 50 şarkı</h2>
      <span className="sarkiListesi">{sarkiListesi}</span>
    </div>
  )
}

export default Spotify