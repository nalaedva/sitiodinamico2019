import firebase from 'firebase/app'

const config = {
  apiKey: "AIzaSyC4aNWN097flglfgYXt8AFZKuxqYg0P0QM",
  authDomain: "edfirebase-64f17.firebaseapp.com",
  databaseURL: "https://edfirebase-64f17.firebaseio.com",
  projectId: "edfirebase-64f17",
  storageBucket: "edfirebase-64f17.appspot.com",
  messagingSenderId: "593977058693"
}

const init = () => firebase.initializeApp(config)

init()
