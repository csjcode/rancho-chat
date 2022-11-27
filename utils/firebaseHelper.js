// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
import Constants from 'expo-constants'
import { firebaseSecrets } from './firebaseKey.js'

export const getFirebaseApp = () => {
  // console.log(Constants.expoConfig.extra.FIREBASE_API_KEY)
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: firebaseSecrets.FIREBASE_API_KEY,
    authDomain: 'rancho-chat.firebaseapp.com',
    projectId: 'rancho-chat',
    storageBucket: 'rancho-chat.appspot.com',
    messagingSenderId: '864353907940',
    appId: '1:864353907940:web:d65d6234512170a188e8f1',
    measurementId: 'G-0P3L7BPT8S',
  }

  // Initialize Firebase
  return initializeApp(firebaseConfig)
  const analytics = getAnalytics(app)
}
