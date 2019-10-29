import * as firebase from 'firebase';
import {firebaseConfig} from './config'



firebase.initializeApp(firebaseConfig);
const databaseRef = firebase.database().ref();
export const userFormRef = databaseRef.child("userform")

