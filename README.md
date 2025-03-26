# 🎤 AI Voice-Controlled To-Do App 🚀  

An AI-powered **To-Do List App** that allows users to add tasks using **voice commands**. Built using **React.js (Frontend)** and **FastAPI (Backend with Python)**.

---

## 🛠️ Tech Stack  
- **Frontend:** React.js, Tailwind CSS, Axios  
- **Backend:** FastAPI, SpeechRecognition (Python), Uvicorn  
- **Database:** In-memory storage (can be extended to PostgreSQL/MongoDB)  

---

## 📌 Features  
✔️ **Voice-Controlled Task Management** – Add tasks using speech commands  
✔️ **FastAPI Backend** – Lightweight and high-performance API  
✔️ **React Frontend** – Modern UI with Tailwind CSS  
✔️ **REST API Integration** – Fetch and add tasks dynamically  
✔️ **Scalable & Deployable** – Can be extended with authentication & database support  

---

## 🎥 Demo  
👉 **[Live Demo](#)** (Add link after deployment)  

---

## 🚀 Installation & Setup  

### 1️⃣ **Clone the Repository**
```sh
git clone https://github.com/guntojushiv/AI-Voice-Todo-App.git
cd AI-Voice-Todo-App

2️⃣ Backend Setup (FastAPI)

cd backend
python -m venv venv
venv\Scripts\activate      # Windows
pip install -r requirements.txt
uvicorn main:app --reload
API running at: http://127.0.0.1:8000/docs

3️⃣ Frontend Setup (React.js)

cd frontend
npm install
npm start
App running at: http://localhost:3000

🌍 Deployment:-
Frontend (Netlify/Vercel)
1.Push frontend code to GitHub
2.Deploy via Vercel or Netlify

Backend (Render/Heroku)
1.Push backend code to GitHub
2.Deploy via Render or Heroku
