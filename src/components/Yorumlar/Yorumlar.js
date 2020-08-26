import React, { useState, useEffect } from 'react'
import { Button, Comment, Form, Header } from 'semantic-ui-react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { useStateValue } from '../../StateProvider'
import Yorum from './../Yorum/Yorum'
function Yorumlar() {
  const [{ user }] = useStateValue()
  const [comment, setComment] = useState("")
  const [data, setData] = useState([])
  const [sarki, setSarki] = useState({})
  const [yorumlarr, setYorumlarr] = useState([])
  const { sarkici, sarkiAdi } = useParams()
  const baseURL = 'https://sarkiakor-5760f.firebaseio.com/sanatcilar'
  useEffect(() => {
    axios
      .get(`${baseURL}.json`)
      .then(resp => {
        const istenilenSarkici = resp.data.find(turkucu => turkucu.isim === sarkici)
        const istenilenSarki = istenilenSarkici.sarkilar.find(sarki => sarki.isim === sarkiAdi)
        const istenilenYorumlar = istenilenSarki.yorumlar
        setData(resp.data)
        setSarki(istenilenSarki)
        setYorumlarr(istenilenYorumlar)
      })
      .catch(err => console.log(err))
  }, [])

  const addComment = (params) => {
    const istenilenSarkiciIndex = data.findIndex(turkucu => turkucu.isim === sarkici)

    const istenilenSarkiIndex = data[istenilenSarkiciIndex].sarkilar.findIndex(sarki => sarki.isim === sarkiAdi)

    const commentData = {
      author: user ? user.email : "anonim",
      comment: comment
    }
    console.log(user?.email)
    axios.
      post(`${baseURL}/${istenilenSarkiciIndex}/sarkilar/${istenilenSarkiIndex}/yorumlar.json`, commentData)
      .then(resp => {
        console.log(resp)
        window.location.reload()
      })
      .catch(err => console.log(err))
  }
  return (
    <div>
      <Comment.Group>
        <Header as='h3' dividing>
          {/* {Comments} */}
        </Header>
        {yorumlarr && (
          Object.values(yorumlarr)?.map(yorum => {
            return <Yorum author={yorum.author} comment={yorum.comment} key={Math.random(1, 10000)} />
          })
        )
        }
        <Form reply>
          <Form.TextArea onChange={e => setComment(e.target.value)} />
          <Button content='Add Comment' labelPosition='left' icon='edit' primary onClick={addComment} />
        </Form>
      </Comment.Group>
    </div>
  )
}

export default Yorumlar
