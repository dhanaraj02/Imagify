# Imagify – AI Text to Image Generator

Imagify is a full-stack AI SaaS web application that allows users to generate images from text prompts using the ClipDrop API.  
The application includes secure user authentication, a credit-based image generation system, payment integration for purchasing credits, and image download functionality.

This project demonstrates real-world MERN stack development with AI API integration and SaaS-style features.

---

## 🚀 Features

- User authentication (signup & login)
- AI-powered text-to-image generation using ClipDrop API
- Credit-based system for image generation
- Payment integration to purchase credits
- Download generated images
- Responsive and user-friendly UI

---

## 🛠️ Tech Stack

### Frontend
- React.js
- Tailwind CSS
- Axios
- React Router DOM

### Backend
- Node.js
- Express.js
- JWT authentication

### Database
- MongoDB (Mongoose)

### AI & Payments
- ClipDrop API (image generation)
- Payment gateway integration

### Deployment
- Frontend: Vercel
- Backend: Render 

---

## 📁 Project Structure

Imagify/
├── client/ # React frontend
│ ├── src/
│ ├── public/
│ └── package.json
│
├── server/ # Express backend
│ ├── controllers/
│ ├── routes/
│ ├── models/
│ ├── middleware/
│ └── package.json
│
└── README.md



---



### Install dependencies

Backend:
cd server
npm install

makefile
Copy code

Frontend:
cd client
npm install

Copy code

---

### Run the application

Start backend:
cd server
npm run dev

powershell
Copy code

Start frontend:
cd client
npm run dev

Copy code

Open `http://localhost:3000` in your browser.

---

## 💳 Credit System

- Each image generation consumes one credit
- Users must purchase credits when balance is insufficient
- Credits are added after successful payment

---

## 📥 Image Download

- Users can download generated images directly from the application interface

