# 🏋️‍♂️ BMI Calculator 📏

Welcome to the **BMI Calculator** app! This is a simple React app that helps you calculate your Body Mass Index (BMI) based on your weight and height. It also provides a health status based on your BMI result. 

## ✨ Features

- 💪 Calculate your BMI by entering your weight and height.
- 🟢 Displays a health status (Underweight, Normal, Overweight, Obese) based on the BMI value.
- ⚠️ Shows a warning toast if input fields are left empty.

## 🛠️ Tech Stack

- ⚛️ React
- 🚨 React Toastify (for notifications)
- 🎨 Tailwind CSS (for styling)

## ⚡ Concepts Used in React

- **useState**: Manages the state of weight, height, BMI, and health status in the app. It allows dynamic updating of values based on user input.
- **Conditional Rendering**: Displays different messages and calculations based on the BMI value, showing the health status (Underweight, Normal, Overweight, or Obese).
- **Form Handling**: Handles the form submission and input changes, validating the data before calculating the BMI.
- **Event Handling**: Used for handling user interactions like the form submission (`onSubmit`) and input field changes (`onChange`).
- **React Toastify**: Shows real-time, customizable toast notifications for form validation errors, like missing input fields.

## 💻 Installation

1. Clone this repository:
   ```bash
   git clone https://github.com/yourusername/bmi-calculator.git
