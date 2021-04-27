import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
  // apiKey: process.env.API_KEY,
  // authDomain: process.env.AUTH_DOMAIN,
  // databaseURL: process.env.DATABASE_URL,
  // projectId: process.env.PROJECT_ID,
  // storageBucket: process.env.STORAGE_BUCKET,
  // messagingSenderId: process.env.MESSAGING_SENDERID,
  // appId: process.env.APP_ID,

  apiKey: 'AIzaSyBm9VXXj0pjKwkWrr4lJqsGrpBHkLUdRho',
  authDomain: 'udemy-course-nextjs.firebaseapp.com',
  databaseURL: 'https://udemy-course-nextjs-default-rtdb.firebaseio.com',
  projectId: 'udemy-course-nextjs',
  storageBucket: 'udemy-course-nextjs.appspot.com',
  messagingSenderId: '562793526418',
  appId: '1:562793526418:web:e1019ac3cb79070bd2a24b',
}

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig)
} else {
  firebase.app()
}

const projectFirestore = firebase.firestore()
const timestamp = firebase.firestore.FieldValue.serverTimestamp

export { projectFirestore, timestamp }
