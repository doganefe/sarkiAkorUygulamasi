import React, { useEffect, useState } from 'react'
import './SarkiDetay.css'
import { useParams } from 'react-router-dom'
import axios from 'axios'

import Yorumlar from '../Yorumlar/Yorumlar'
function SarkiDetay() {
  const [sarki, setSarki] = useState([])
  const { sarkiAdi, sarkici } = useParams()

  useEffect(() => {
    //TUM SARKICILARI AL
    axios
      .get("https://sarkiakor-5760f.firebaseio.com/sanatcilar.json")
      .then(resp => {
        //YENI DIZIYE SARKICILAR OBJESİNDEKİ SARKILARI AKTAR
        const sarkilarr = resp.data.map(sanatci => sanatci.sarkilar)
        //TUM SARKILARI TEK BİR DİZİDE TOPLA
        const sarkilarrr = sarkilarr.flat(1)
        //URL'DEKI SARKI ADI DEGERINE GORE ISTENEN SARKIYI BUL
        const istenilenSarki = sarkilarrr.find(sarki => sarki.isim === sarkiAdi)
        //SARKIYI STATE'E AKTAR
        setSarki(istenilenSarki)
      })
      .catch(err => console.log(err.message))

  }, [])
  return (
    <>
      <div className="sarkiDetay">
        <h3>{sarkici}</h3>
        <h5>Şarkı adı : {sarkiAdi}</h5>
        {sarki && <p>{sarki.sozler}</p>}
      <Yorumlar />
      </div>
    </>
  )
}

export default SarkiDetay
