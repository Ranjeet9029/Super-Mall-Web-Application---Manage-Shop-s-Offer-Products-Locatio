import { getAuthInstance } from './utils.js';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut as firebaseSignOut, onAuthStateChanged as fbOnAuthStateChanged } from 'https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js';
import { getDB, serverTimestamp } from './utils.js';
import { doc, setDoc } from 'https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore.js';


export async function signUp(email,password,displayName,role='merchant'){
const auth = getAuthInstance();
const cred = await createUserWithEmailAndPassword(auth,email,password);
// create a profile doc
await setDoc(doc(getDB(),'users',cred.user.uid),{
displayName: displayName || null,
email,
role,
createdAt: serverTimestamp()
});
return cred;
}


export async function signIn(email,password){
const auth = getAuthInstance();
return signInWithEmailAndPassword(auth,email,password);
}


export function signOut(){
const auth = getAuthInstance();
return firebaseSignOut(auth);
}


export function onAuthStateChanged(cb){
return fbOnAuthStateChanged(getAuthInstance(), cb);
}


export function getCurrentUser(){
return getAuthInstance().currentUser;
}