# rb-hebrom-tank-app
# 🚢 RB Hebrom - Tank Sounding Calculator

A simple and efficient application for calculating tank volume on the RB Hebrom tugboat, based on real calibration tables.

## 📌 Purpose

To simplify onboard fuel volume calculations, considering that tanks have irregular shapes and cannot be calculated using basic geometric formulas.

## ⚙️ Features

- Tank selection:
  - Port Side (BB)
  - Starboard Side (BE)
- Input in meters
- Automatic conversion to millimeters
- Linear interpolation calculation
- Output in liters
- Modern and responsive interface
- Works 100% offline

## 🧠 Calculation Logic

The system uses linear interpolation between calibration table points:

- Finds the closest values to the input
- Calculates proportionally between them
- Ensures accurate results even between measured points

## 💻 Technologies Used

- HTML5
- CSS3 (modern responsive design)
- JavaScript (calculation logic)

## 🚀 How to Use

1. Clone or download the repository
2. Add your logo as `logo.png`
3. Open `index.html` in any browser

## 🌐 Offline Usage

Designed for onboard (vessel) environments, the application runs completely offline with no internet required.

## 🔧 Future Improvements

- Measurement history
- Report export
- Fuel consumption tracking
- Android APK version
- Backend integration (Laravel / Spring Boot)

## 📷 Interface

Modern UI focused on usability in operational environments.

## 👨‍💻 Author

Developed for maritime operational use.
