import Rebase from 're-base'
import firebase from 'firebase/app'
import 'firebase/database'

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyA8yQDaqPs7i79DMHK71jBdGVpkJCb4AFA",
    authDomain: "chatbox-app-7b896.firebaseapp.com",
    databaseURL: "https://chatbox-app-7b896.firebaseio.com"
})

const base = Rebase.createClass(firebase.database())

export { firebaseApp }

export default base