import React,{useEffect} from 'react';
import './App.css';
import Header from './components/Header/Header'
import SarkiDetay from './components/SarkiDetay/SarkiDetay'
import ArtistSongs from './components/ArtistSongs/ArtistSongs'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './components/Home/Home'
import Spotify from './spotify/Spotify'
import Login from './Login/Login'
import { useStateValue } from './StateProvider'
import { auth } from './Firebase/firebase'

function App() {
  const [{ user }, dispatch] = useStateValue()

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(authUser => {
      if (authUser) {
        // the user is logged in
        // console.log('the user is logged in')
        dispatch({
          type: "SET_USER",
          user: authUser
        })
      } else {
        // the user is logged out
        // console.log('the user is logged out')
        dispatch({
          type: "SET_USER",
          user: null
        })
      }
    })
    return () => {
      //Any cleanup operations go in here...
      unsubscribe()
    }
  }, [])
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/sanatcilar/:sarkici/:sarkiAdi" exact>
            <Header />
            <SarkiDetay />
          </Route>
          <Route path="/sanatcilar/:sarkici" exact>
            <Header />
            <ArtistSongs />
          </Route>
          <Route path="/spotify" exact>
            <Header />
            <Spotify />
          </Route>
          <Route path="/login" exact>
            <Header />
            <Login />
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
