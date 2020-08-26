import firebase from 'firebase'

 const firebaseConfig = {
    apiKey: "AIzaSyBF4_0RoVECOt1pbjTi1xlXnrzn3IC2YZU",
    authDomain: "sarkiakor-5760f.firebaseapp.com",
    databaseURL: "https://sarkiakor-5760f.firebaseio.com",
    projectId: "sarkiakor-5760f",
    storageBucket: "sarkiakor-5760f.appspot.com",
    messagingSenderId: "231665179699",
    appId: "1:231665179699:web:c2a1b59fa38b8ee3059746",
    measurementId: "G-LS1KFK750M"
  };

  firebase.initializeApp(firebaseConfig)

  const auth = firebase.auth()
  export { auth }