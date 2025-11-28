# Newsletter Sign-Up Form

A Frontend Mentor challenge – Email validation with JavaScript

## 📌 Overview

This project is a responsive newsletter sign-up form built with HTML, CSS, and vanilla JavaScript.
It validates the user’s email, displays error messages, and shows a success screen without reloading the page.

---

## 🚀 Features

- Real-time email validation using regex
- Error message and visual feedback for invalid input
- Success screen with dynamic email confirmation
- Fully responsive (mobile-first) layout
- Clean and simple UI based on a Frontend Mentor design

---

## 🛠️ Technologies Used

- **HTML5**
- **CSS3** (Flexbox, variables, media queries)
- **JavaScript (Vanilla JS)**

---

## 📂 Project Structure

```
/
│── index.html
│── index.css
│── index.js
└── images/
```

---

## 📧 Email Validation

A simple and effective regex is used to validate the input:

```js
const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
```

If the email is invalid:

- The input is highlighted in red
- An error message appears

If the email is valid:

- The main container hides
- A confirmation message appears
- The entered email is displayed dynamically

---

## 📱 Responsive Design

The project follows a **mobile-first** approach.
It includes:

- A mobile illustration
- A desktop version activated via `@media (min-width: 769px)`

---

## ▶️ How to Use

1. Open `index.html` in your browser
2. Enter an email
3. Click **“Subscribe to monthly newsletter”**
4. Click **“Dismiss message”** to return to the form

---

## 🧑‍💻 Author

This project was created as part of a **Frontend Mentor challenge**, using HTML, CSS, and JavaScript.

---

Thank you for checking out this project!
