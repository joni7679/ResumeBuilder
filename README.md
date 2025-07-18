# 📄 Resume Builder Web App

A powerful and user-friendly **Resume Builder** web application with Firebase authentication. Easily build, edit, and download professional resumes in minutes. Designed with modern web technologies for a seamless experience.

---

## 🚀 Live Preview

[🔗 View Live Website](https://your-live-link.com)  
(Replace with your deployed site link)

---

## ✨ Key Features

### 🔐 Authentication
- ✅ User Registration and Login
- ✅ Email Verification
- ✅ Forgot Password & Reset Password
- ✅ Firebase Authentication integration

### 🧾 Resume Builder
- ✍️ Add a personal **summary** with real-time **spelling check** and **auto suggestions**
- 📁 Add multiple **projects** with detailed descriptions
- 🎨 Clean & modern UI to edit resume fields
- 📥 **Download resume** as PDF with just one click
- 📱 Fully **responsive design** (mobile/tablet/desktop)

### 🧠 Smart Suggestions
- Spell checking for summary and project descriptions
- Smart word suggestions to improve grammar and writing
- Built-in error hints for better resume writing

---

## 🔧 Tech Stack

| Technology        | Use Case                            |
|------------------|--------------------------------------|
| react, Tailwind CSS , daisyui | UI Design & Layout                  |
| JavaScript        | Dynamic Functionality                |
| Firebase Auth     | User Login, Signup, Email Verify     |
| Firebase Hosting  | Deployment (Optional)                |
| AOS / GSAP        | Animations (If used)                 |
| Git & GitHub      | Version Control                      |

---

##  Project Structure

```bash
src/
│
├── components/
│   ├── Auth/            # Login, Signup, Reset
│   ├── ResumeBuilder/   # Input fields and preview
│   └── Shared/          # Header, Footer, Buttons
│
├── pages/
│   ├── Home.jsx
│   ├── Features.jsx
│   ├── About.jsx
│   └── Pricing.jsx
│
├── firebase/
│   └── firebase.js      # Firebase Config
│
├── utils/
│   └── spellCheck.js    # Custom spell checker logic
│
└── App.jsx

----
###  design View

| Page | Mobile Preview |
|------|----------------|
| 🏠 Home | ![Home Mobile](./screenshots/home-mobile.png) |
| 📋 Dashboard | ![Dashboard Mobile](./screenshots/dashboard-mobile.png) |

---

# 1. Clone the Repository
git clone https://github.com/your-username/resume-builder.git

# 2. Move into the Project Folder
cd resume-builder

# 3. Install Dependencies
npm install

# 4. Run the Development Server
npm run dev
