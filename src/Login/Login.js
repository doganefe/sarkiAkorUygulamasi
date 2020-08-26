import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import './Login.css'
import { auth } from './../Firebase/firebase'
import { useStateValue } from '../StateProvider'

const DEFAULT_INFO = {
  email: "",
  password: ""
}

function Login(props) {
  const [{user}]  = useStateValue()
  const history = useHistory()
  const [loginInfo, setloginInfo] = useState(DEFAULT_INFO)

  const handleChange = e => {
    setloginInfo({ ...loginInfo, [e.target.name]: e.target.value })
  }

  const login = e => {
    e.preventDefault() //this stops the refresh
    auth.signInWithEmailAndPassword(loginInfo.email, loginInfo.password)
      .then((auth) => {
        //logged in , redirect to homepage
        history.push('/')
      })
      .catch(err => alert(err.message))
  }
  const register = e => {
    e.preventDefault() //this stops the refresh
    //register stuff
    auth.createUserWithEmailAndPassword(loginInfo.email, loginInfo.password)
      .then(auth => {
        //created a user and logged in , redirecto to homepage
        history.push('/')
      })
      .catch(err => err.message)
  }
  const signOut = (e) => {
    e.preventDefault()
    auth.signOut()
  }

  return !user ? (
    <div className="login">
      <Link to="/">
        <img
          className="login__image"
          src="data:image/jpeg;base64,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"
          alt=""
        />
      </Link>
      <div className="login__container">
        <h1>Giriş yap</h1>
        <form>
          <h5>Email</h5>
          <input value={loginInfo.email} type="email" name="email" onChange={handleChange} />
          <h5>Şifre</h5>
          <input value={loginInfo.password} type="password" name="password" onChange={handleChange} />
          <button
            type="submit"
            className="login__signInButton"
            onClick={login}
          >Giriş yap</button>
        </form>
        <p>By signing-in you agree to Our Conditions of Use & Sale. Please see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.</p>
        <button
          onClick={register}
          className="login__signUpButton">Hesabını oluştur</button>
      </div>
    </div>
  ) : (
  <div>
  <h4>
    Merhabalar {user.email}
    </h4>
    <button onClick={signOut}>Cıkış</button>
  </div>
    )
}

export default Login