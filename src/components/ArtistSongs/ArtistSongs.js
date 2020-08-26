import React, { useState, useEffect } from 'react'
import { useParams,Link } from 'react-router-dom'
import axios from 'axios'
import './ArtistSongs.css'
function ArtistSongs(props) {
    const [sanatciBilgi, setSanatciBilgi] = useState({})
    const { sarkici } = useParams()
    useEffect(() => {
        axios
            .get(`https://sarkiakor-5760f.firebaseio.com/sanatcilar.json`)
            .then(resp => {
                const sanatciBilgileri = resp.data.find(sanatci => {
                    if (sanatci.isim === sarkici) {
                        return sanatci
                    }
                })
                setSanatciBilgi(sanatciBilgileri)
            })
    }, [])
    return (
        <div className="artistSongs">
            <h3>Sanatçı Adı : {sarkici}</h3> 
            <h2>Şarkıları</h2>
            {sanatciBilgi?.sarkilar &&  sanatciBilgi.sarkilar.map((x,_)=> {
                return (
                    <div  key={_}>
                        <Link className="link" to={`/sanatcilar/${sarkici}/${x.isim}/`}><h3>{x.isim}</h3></Link>
                    </div>
                )
            })}
        </div>
    )
}

export default ArtistSongs
