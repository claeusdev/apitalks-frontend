import firebase from 'firebase'

var config = {
  apiKey: 'AIzaSyB2LGWsF0g6MAAO13sLCIZb8LwxZtMFmW4',
  authDomain: 'apitalks-2e2f7.firebaseapp.com',
  databaseURL: 'https://apitalks-2e2f7.firebaseio.com',
  projectId: 'apitalks-2e2f7',
  storageBucket: 'apitalks-2e2f7.appspot.com',
  messagingSenderId: '131191374975'
}

firebase.initializeApp(config)

const auth = firebase.auth()
const currentUser = auth.currentUser

export { auth, currentUser }
