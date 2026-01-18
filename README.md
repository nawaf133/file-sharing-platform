<p align="center">
  <img src="https://cdn.discordapp.com/attachments/1459705835243704496/1462448482517520425/95.jpg?ex=696e3ac9&is=696ce949&hm=60328023b1a7f37fc02482358698d1d985ac4af7222a817d8dd92a4fa84db521&" alt="QuickDrop Banner" width="800"/>
</p>

<h1 align="center">🚀 QuickDrop</h1>

<p align="center">
  A **fast, secure, and lightweight file sharing platform** with expiring links and optional password protection.
</p>

---

## 🌟 Features

- 🔹 Upload files easily via **Web Interface** or **API**
- 🔹 Generate **unique download links** with optional password
- 🔹 **Link expiry** (e.g., 24 hours)
- 🔹 **Download progress** and file size info
- 🔹 **Front-End** responsive and simple
- 🔹 Fully **Dockerized** for easy deployment

---

## 🛠️ Tech Stack

![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white)
![Express](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![SQLite](https://img.shields.io/badge/SQLite-003B57?style=for-the-badge&logo=sqlite&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)

---

## ⚡ Demo

<p align="center">
  <img src="https://raw.githubusercontent.com/Nawaf/file-sharing-platform/main/assets/demo.gif" alt="Demo" width="600"/>
</p>

---

## 📥 Installation

### Local Setup
```bash
git clone https://github.com/nawaf133/file-sharing-platform.git
cd file-sharing-platform
npm install
npm run dev


Open in browser: http://localhost:3000

Using Docker
docker-compose up --build

📝 API Endpoints
Method	Endpoint	Description
POST	/api/files/upload	Upload a file (form-data: file, expiresIn, password)
GET	/api/files/:id	Download a file (query: password if required)
📂 Project Structure
file-sharing-platform/
├── server.js
├── db.js
├── routes/
│   └── files.js
├── uploads/
├── client/
│   └── index.html
├── Dockerfile
├── docker-compose.yml
├── .env
├── package.json
└── README.md

🔮 Roadmap

User accounts & authentication

File analytics & stats

Cloud storage (AWS S3)

Admin panel for managing uploads

Multi-language support

🛡️ License & Credits

© 2026 Nawaf. All rights reserved.
This project is licensed under MIT License.

