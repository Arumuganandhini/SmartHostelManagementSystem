# 🏫 Smart Hostel Management System

A full-stack web application developed to digitally manage hostel operations such as complaints, notices, late entry requests, emergency alerts, and communication between students and hostel administration.

This project is designed as a **final-year, real-world application** with role-based access and a professional user interface.

### PROJECT STRUCTURE 

SmartHostelManagementSystem/
│
├── backend/
│   ├── controllers/   → Handles business logic
│   ├── models/        → MongoDB schemas
│   ├── routes/        → REST API endpoints
│   ├── middleware/    → JWT authentication & role checks
│   ├── config/        → Database configuration
│   └── server.js      → Backend entry point
│
├── frontend/
│   └── my-hostel/
│       ├── src/
│       │   ├── components/ → Navbar & reusable UI components
│       │   ├── pages/      → Student & Admin pages
│       │   ├── services/   → Axios API configuration
│       │   ├── App.js      → Routing & protected routes
│       │   └── index.js
│       └── package.json
│
└── README.md


## 📌 Project Objective

Traditional hostel management systems rely on manual processes that are inefficient and error-prone.  
The **Smart Hostel Management System** provides a centralized digital platform to improve communication, transparency, and operational efficiency in hostels.

---

## 👥 User Roles

### 👤 Student
- Secure login
- View hostel notices
- Raise complaints and track status
- Submit late entry requests
- Receive messages from admin
- Trigger emergency alerts

### 🧑‍💼 Admin (Warden)
- Secure admin login
- View and resolve student complaints
- Approve or reject late entry requests
- Create and delete notices
- Send messages to students
- Monitor emergency alerts

---

## ✨ Features Implemented (100% Coverage)

### 🔐 Authentication & Security
- JWT-based authentication
- Role-based access control
- Protected routes for students and admins

### 📢 Notice Management
- Admin: Create & delete notices
- Student: View notices

### 🛠 Complaint Management
- Student: Raise complaints with category & description
- Admin: View and resolve complaints
- Live status updates (Pending / Resolved)

### 🕘 Late Entry Management
- Student: Submit late entry request
- Admin: Approve or reject request

### 🚨 Emergency Alert
- One-click emergency alert for students
- Admin monitoring support

### 💬 Messaging System
- Admin can send messages to students
- Students can view received messages

### 📊 Dashboards
- Separate dashboards for Student and Admin
- Grid-based professional UI
- Bootstrap 5 styling

---

## 🛠 Tech Stack

### Frontend
- React.js
- Bootstrap 5
- React Router DOM
- Axios

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- JSON Web Token (JWT)

---

## 🚀 How to Run the Project

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/Arumuganandhini/SmartHostelManagementSystem.git


#BackEnd Setup 
cd backend
npm install
npm run dev


# Frontend Setup 
cd frontend/my-hostel
npm install
npm start

#Sample Login for  👤 Student Login
Email: ammu@student.com
Password: 123456

#🧑‍💼 Admin Login

Email: admin@hostel.com
Password: admin123
