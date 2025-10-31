🍽️ Food Paradise
🧾 Overview

Food Paradise is a user-friendly food ordering web application designed to make online dining simple, smooth, and enjoyable.
Users can browse dishes by category, search for meals, manage their cart, and simulate placing orders — all from an elegant, responsive interface.
The project is built using React.js (Vite) and Tailwind CSS, ensuring speed, flexibility, and great user experience.

✨ Features

🍕 Dynamic Menu Categories – Browse meals like Salads, Cakes, Sandwiches, Noodles, etc.

🔍 Live Search Filter – Instantly find dishes as you type.

🛒 Cart System – Add, remove, and update food items in the cart.

🌗 Dark Mode Support – Toggle between dark and light themes.

💬 Contact Form – Users can send inquiries or feedback.

📱 Responsive UI – Works perfectly on desktop, tablet, and mobile.

💾 LocalStorage Integration – Saves user data locally (no backend required).

🧑‍💻 Tech Stack
Category	Technology
Frontend	React.js (Vite)
Styling	Tailwind CSS
State Management	React Hooks
Data Storage	LocalStorage
Icons & Assets	Local PNG Images
Build Tool	Vite
🗂️ Folder Structure
FOOD-ORDER-PROJECT/
├── src/
│   ├── assets/
│   │   └── images/
│   │       ├── menu_1.png
│   │       ├── food_1.png
│   │       ├── rating_starts.png
│   │       ├── assets.js              # exports all images and food/menu data
│   ├── components/
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx
│   │   ├── Menu.jsx
│   │   ├── Navbar.jsx
│   │   ├── Ordertrack.jsx
│   │   ├── ShipAddressForm.jsx
│   │   └── SigninSignup.jsx
│   ├── pages/
│   │   ├── About.jsx
│   │   ├── Cart.jsx
│   │   ├── Checkout.jsx
│   │   ├── Contact.jsx
│   │   ├── Home.jsx
│   │   └── Orders.jsx
│   ├── redux/                        # (if used for global state)
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
├── public/
├── package.json
├── tailwind.config.js
├── vite.config.js
└── README.md

⚙️ Installation & Setup
1️⃣ Clone the Repository
git clone https://github.com/your-username/food-paradise.git
cd food-order-project

2️⃣ Install Dependencies
npm install

3️⃣ Start the Development Server
npm run dev

4️⃣ Build for Production
npm run build

5️⃣ Preview Production Build
npm run preview


🏠 Home Page

Browse and search dishes by category.

Add or remove from cart with one click.

🛒 Cart Page

Displays selected food items with quantity and total price.

📞 Contact Page

Contains a contact form for user messages or inquiries.

🚀 Future Enhancements

🔗 Integrate a MongoDB + Node.js backend for real order and user data storage.

👤 Add Login/Signup authentication .

📦 Create Admin Dashboard for managing orders and menus.

💳 Implement Online Payment Gateway integration.

👨‍💻 Developer Info

Developer: Sneha Sooraj 
Project Title: Food Paradise
Framework: React (Vite)
Styling: Tailwind CSS
Language: JavaScript (ES6+)

🧾 License

This project is open-source and available for educational and personal use.