import firebase from 'https://www.gstatic.com/firebasejs/9.23.0/firebase-app-compat.js';
import 'https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore-compat.js';

const db = () => firebase.firestore();

export async function log(action, actorUid, target, details = {}){
  const payload = {
    action,
    actorUid: actorUid || null,
    target: target || null,
    details,
    createdAt: firebase.firestore.FieldValue.serverTimestamp()
  };
  console.log('LOG:', payload);
  try {
    await db().collection('logs').add(payload);
  } catch (err) {
    console.error('Failed to write log', err);
  }
}