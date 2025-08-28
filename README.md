🏬 Super Mall Web Application

A web application built with HTML, CSS, JavaScript, and Firebase that allows merchants to manage shops, offers, and products. Customers can browse shops, compare offers, and filter based on category/floor.

🚀 Features
👤 Authentication

Sign Up / Sign In / Sign Out (Firebase Auth)

Track current user session

Auth state displayed in UI

🏪 Shop Management

Create Shop (Name, Category, Owner)

List Shops by Owner

List All Shops (for customers)

🎁 Offers & Products

Manage Offer Details (CRUD)

Compare Product Cost & Features

Filter Shops by Category & Floor

Shop-wise Offers

🛠️ Admin Panel

Manage Shop Details

Manage Categories & Floors

View All Shops / Offers

🗄️ System Modules

Admin → Manage Shops, Offers, Floors, Categories

User (Merchant) → Create Shops, Add Offers, Manage Products

Customer → Browse Shops, View Offers, Compare Products

⚙️ Technologies

Frontend → HTML, CSS, JavaScript

Backend (BaaS) → Firebase (Authentication, Firestore, Hosting)

Logging → JavaScript custom logger (every action logged)

📂 Project Structure
super-mall-app/
│── index.html
│── style.css
│── app.js
│── auth.js
│── shopService.js
│── logger.js
│── firebase-config.js
│── /pages
│     ├── login.html
│     ├── signup.html
│     ├── dashboard.html
│     └── admin.html
│── /assets
│     ├── css/
│     └── js/
│── README.md

🖥️ Workflow

User registers or logs in (Firebase Authentication).

Merchant can create a shop, add offers, and manage details.

Customers can browse shops, view offers, and compare products.

Admin manages shop approvals, categories, and floors.

🏗️ System Architecture

Frontend (HTML, CSS, JS) → Handles UI interactions

Firebase Authentication → User sign in / sign up

Firebase Firestore → Stores shops, offers, products

Firebase Hosting → Deployment

✅ Project Evaluation Metrics

Safe → Firebase Auth ensures secure login

Testable → Modular JavaScript functions (auth.js, shopService.js)

Maintainable → Clean separation of concerns

Portable → Runs in any browser, deployable to Firebase Hosting
