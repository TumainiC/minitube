# 🎥 Mini YouTube Clone  

A lightweight YouTube-like web application built using **HTML, CSS, and JavaScript**.  
This project demonstrates **dynamic page navigation, local storage usage, and modular UI rendering** without relying on heavy frameworks.  

---

## ✨ Features  

- **Home Page**  
  - Displays a list of videos with thumbnail, title, and channel info.  
  - Clicking a video opens the player page and saves it to watch history.  

- **Video Player Page**  
  - Plays the selected video.  
  - Shows video details and channel information.  
  - Loads **Suggested Videos** dynamically from the same dataset as the home page.  
  - Persists watched videos into browser **localStorage**.  

- **Account Page**  
  - Displays account details (username, Google account).  
  - Shows **Watch History** in the same card style as the home page.  

- **Navigation**  
  - Seamless switching between **Home, Videos, and Account** pages using JavaScript.  
  - No full-page reloads required.  

---

## 🛠️ Tech Stack  

- **Frontend**: HTML5, CSS3, Vanilla JavaScript  
- **Storage**: LocalStorage (for watch history)  
- **Assets**: Placeholder thumbnails & video references  

---

## 📂 Project Structure  

mini-youtube-clone/
│
├── home.html # Homepage
├── pages/
│ ├── video.html # Video player page
│ └── account.html # Accounts page
│
├── css/
│ ├── home.css # Homepage styles
│ ├── video.css # Video page styles
│ └── account.css # Account page styles
│
├── js/
│ ├── home.js # Loads videos on homepage
│ ├── video.js # Video player logic + suggested videos
│ └── account.js # Watch history + account info
│
├── images/ # Thumbnails & icons
├── videos/ # Local sample videos (optional)
└── README.md # Project documentation

## Screenshots
### Home Page
[HomePage](website_screenshot/home_page.png)

### Single Video page
[VideoPage](website_screenshot/single_video_page.png)

### Account Page
[AccountPage](website_screenshot/account_page.png)

