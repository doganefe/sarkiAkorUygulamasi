import React, { useState, useEffect } from 'react'
import './Showcase.css'
import axios from 'axios'
import { Link } from 'react-router-dom'
const baseURL = 'https://sarkiakor-5760f.firebaseio.com/sanatcilar'
function Showcase() {
  const [sarkilar, setSarki] = useState([])

  useEffect(() => {
    axios
      .get(`${baseURL}.json`)
      .then(resp => {
        setSarki(resp.data.map(sanatci => {
          return {
            sanatciAdi: sanatci.isim,
            sarkilar: sanatci.sarkilar.map(sarkilar => sarkilar.isim)
          }
        }))
      }
      )
      .catch(err => console.log(err))
  }, [])
  console.log(sarkilar)
  return (
    <div className="home__showpage">
      <div>
        <h3>Popüler</h3>
        {
          sarkilar?.map(sarkici => sarkici.sarkilar.map((sarki, _) => {
            return <Link key={_} to={`/sanatcilar/${sarkici.sanatciAdi}/${sarki}`}><p className="sarkilar">{sarki.charAt(0).toUpperCase() + sarki.slice(1)}-{sarkici.sanatciAdi}</p></Link>
          }))
        }
      </div>
      <div>
        <h3>Yeni Eklenen</h3>
        {
          sarkilar?.map(sarkici => sarkici.sarkilar.reverse().map((sarki, _) => {
            return <Link key={_} to={`/sanatcilar/${sarkici.sanatciAdi}/${sarki}`}><p className="sarkilar">{sarki.charAt(0).toUpperCase() + sarki.slice(1)}-{sarkici.sanatciAdi}</p></Link>
          }))
        }
      </div>
      <div>
        <h3>Kolay Akorlu</h3>
        {
          sarkilar?.map(sarkici => sarkici.sarkilar.map((sarki, _) => {
            return <Link key={_} to={`/sanatcilar/${sarkici.sanatciAdi}/${sarki}`}><p className="sarkilar">{sarki.charAt(0).toUpperCase() + sarki.slice(1)}-{sarkici.sanatciAdi}</p></Link>
          }))
        }
      </div>
    </div>
  )
}

export default Showcase
