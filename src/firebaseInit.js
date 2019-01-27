import firebase from 'firebase'

var config = {
  apiKey: '',
  authDomain: '',
  databaseURL: '',
  projectId: '',
  storageBucket: '',
  messagingSenderId: ''
}

firebase.initializeApp(config)

const auth = firebase.auth()
const currentUser = auth.currentUser

export { auth, currentUser }
