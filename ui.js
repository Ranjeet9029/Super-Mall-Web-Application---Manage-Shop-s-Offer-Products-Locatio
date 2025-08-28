
import { signIn, signUp, signOut, onAuthStateChanged, getCurrentUser } from './auth.js';
import { createShop, listShopsByOwner, listAllShops } from './shopService.js';
import { log } from './logger.js';

export function bindUI() {
  // 🔹 Sign In
  document.getElementById('btnSignIn').addEventListener('click', async () => {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    try {
      await signIn(email, password);
      log(`User signed in: ${email}`);
      alert('Signed in successfully');
    } catch (err) {
      log(`SignIn Error: ${err.message}`);
      alert(`Error: ${err.message}`);
    }
  });

  // 🔹 Sign Up
  document.getElementById('btnSignUp').addEventListener('click', async () => {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    try {
      await signUp(email, password);
      log(`User signed up: ${email}`);
      alert('Account created successfully');
    } catch (err) {
      log(`SignUp Error: ${err.message}`);
      alert(`Error: ${err.message}`);
    }
  });

  // 🔹 Sign Out
  document.getElementById('btnSignOut').addEventListener('click', async () => {
    try {
      await signOut();
      log(`User signed out`);
      alert('Signed out successfully');
    } catch (err) {
      log(`SignOut Error: ${err.message}`);
      alert(`Error: ${err.message}`);
    }
  });

  // 🔹 Create Shop
  document.getElementById('btnCreateShop').addEventListener('click', async () => {
    const name = document.getElementById('shopName').value;
    const category = document.getElementById('shopCategory').value;
    const owner = getCurrentUser()?.uid;

    if (!owner) {
      alert('Please sign in first');
      return;
    }

    try {
      await createShop({ name, category, owner });
      log(`Shop created: ${name}`);
      alert('Shop created successfully');
    } catch (err) {
      log(`CreateShop Error: ${err.message}`);
      alert(`Error: ${err.message}`);
    }
  });

  // 🔹 List Shops (By Current User)
  document.getElementById('btnMyShops').addEventListener('click', async () => {
    const owner = getCurrentUser()?.uid;
    if (!owner) {
      alert('Please sign in first');
      return;
    }

    try {
      const shops = await listShopsByOwner(owner);
      log(`Fetched ${shops.length} shops for owner ${owner}`);
      document.getElementById('shopList').innerHTML = shops.map(shop => `<li>${shop.name} - ${shop.category}</li>`).join('');
    } catch (err) {
      log(`ListShops Error: ${err.message}`);
      alert(`Error: ${err.message}`);
    }
  });

  // 🔹 List All Shops
  document.getElementById('btnAllShops').addEventListener('click', async () => {
    try {
      const shops = await listAllShops();
      log(`Fetched all shops: ${shops.length}`);
      document.getElementById('allShopList').innerHTML = shops.map(shop => `<li>${shop.name} - ${shop.category}</li>`).join('');
    } catch (err) {
      log(`ListAllShops Error: ${err.message}`);
      alert(`Error: ${err.message}`);
    }
  });

  // 🔹 Track Auth State
  onAuthStateChanged((user) => {
    if (user) {
      document.getElementById('authStatus').innerText = `Signed in as: ${user.email}`;
    } else {
      document.getElementById('authStatus').innerText = 'Not signed in';
    }
  });
}
