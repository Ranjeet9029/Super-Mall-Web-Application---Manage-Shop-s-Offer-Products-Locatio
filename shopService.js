import { getDB, getStorageInstance, serverTimestamp } from './utils.js';
import { ref as sRef, uploadBytes, getDownloadURL } from 'https://www.gstatic.com/firebasejs/9.23.0/firebase-storage.js';
import { getAuthInstance } from './utils.js';
import { log } from './logger.js';


function currentUid(){
const u = getAuthInstance().currentUser;
return u? u.uid : null;
}


export async function createShop(shop){
// shop: {name, category, floor, location: {lat,lng} }
const uid = currentUid();
if(!uid) throw new Error('Not authenticated');
const db = getDB();
const payload = {
...shop,
ownerUid: uid,
createdAt: serverTimestamp()
};
const ref = await addDoc(collection(db,'shops'), payload);
await log('create_shop', uid, ref.id, {shop: payload});
return ref.id;
}


export async function listShopsByOwner(uid){
const db = getDB();
const q = query(collection(db,'shops'), where('ownerUid','==',uid), orderBy('createdAt','desc'));
const snap = await getDocs(q);
return snap.docs.map(d=>({ id: d.id, ...d.data() }));
}


export async function listAllShops(){
const db = getDB();
const q = query(collection(db,'shops'), orderBy('createdAt','desc'));
const snap = await getDocs(q);
return snap.docs.map(d=>({ id: d.id, ...d.data() }));
}


export async function getShopById(shopId){
const d = await getDoc(doc(getDB(),'shops',shopId));
if(!d.exists()) return null;
return { id: d.id, ...d.data() };
}


export async function uploadImage(file, path){
if(!file) return null;
const storage = getStorageInstance();
const r = sRef(storage, path);
const snapshot = await uploadBytes(r, file);
const url = await getDownloadURL(r);
return url;
}


// product & offer functions omitted for brevity — extend similarly: createProduct, createOffer