// Lightweight firebase init and helpers (modular SDK)
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js";
import { getFirestore, serverTimestamp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-storage.js";


let appInstance = null;
export function initFirebase(config){
if(!appInstance) appInstance = initializeApp(config);
return appInstance;
}


export function getAuthInstance(){
if(!appInstance) throw new Error('Firebase not initialized. Call initFirebase(config) first.');
return getAuth(appInstance);
}


export function getDB(){
if(!appInstance) throw new Error('Firebase not initialized. Call initFirebase(config) first.');
return getFirestore(appInstance);
}


export function getStorageInstance(){
if(!appInstance) throw new Error('Firebase not initialized. Call initFirebase(config) first.');
return getStorage(appInstance);
}


export { serverTimestamp };


// small helpers
export function noop(){ }
export function toFloatSafe(v){ const n = Number(v); return Number.isFinite(n)?n:null; }