import firebase from 'firebase'
import Rebase from 're-base'

const app = firebase.initializeApp({
  apiKey: '',
  authDomain: 'PROJECTID.firebaseapp.com',
  databaseURL: 'https://PROJECTID.firebaseio.com',
  projectId: 'PROJECTID',
  storageBucket: 'PROJECTID.appspot.com',
  messagingSenderId: ''
})

const base = Rebase.createClass(app.database())

export const providers = {
  facebook: new firebase.auth.FacebookAuthProvider()
}

export const auth = app.auth()

export default base
