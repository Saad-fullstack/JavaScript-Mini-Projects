# BMI Calculator

A simple and beginner-friendly BMI (Body Mass Index) Calculator built using **HTML, CSS, and JavaScript**.

This project was created to practice JavaScript concepts such as DOM manipulation, event handling, form validation, conditional statements, and mathematical calculations.

---

## Features

- Enter height in centimeters.
- Enter weight in kilograms.
- Calculate BMI instantly.
- Display the BMI value.
- Show the BMI category:
  - Underweight
  - Normal
  - Overweight
  - Obese
- Basic input validation for invalid or empty values.
- Clean and responsive user interface.

---

## Technologies Used

- HTML5
- CSS3
- JavaScript (Vanilla)

---

## Project Structure

```
BMI-Calculator/
│
├── index.html
├── style.css
├── script.js
└── README.md
```

---

## How BMI is Calculated

The BMI formula is:

```
BMI = Weight (kg) / Height² (m²)
```

Since the height is entered in centimeters, it is converted internally before calculating the BMI.

Example:

```
Height: 170 cm
Weight: 65 kg

BMI = 65 / (1.70 × 1.70)
BMI = 22.49
```

---

## BMI Categories

| BMI Range | Category |
|-----------|----------|
| Below 18.5 | Underweight |
| 18.5 – 24.9 | Normal |
| 25 – 29.9 | Overweight |
| 30 and above | Obese |

---

## JavaScript Concepts Practiced

This project helped me practice:

- Selecting elements using `querySelector()`
- Reading user input with `.value`
- Form submission
- `preventDefault()`
- Event Listeners
- `parseInt()`
- `isNaN()`
- Input validation
- Conditional statements (`if`, `else if`, `else`)
- Mathematical calculations
- Updating the DOM using `innerHTML`

---

## How to Run

1. Clone the repository

```
git clone <https://github.com/Saad-fullstack/Basic-JavaScript-Calculator.git>
```

2. Open the project BMICalculator folder.

3. Open `index.html` in your browser.

No additional setup is required.

---

## Future Improvements

- Add a Reset button.
- Display health tips based on BMI.
- Improve validation messages.
- Support height input in feet and inches.
- Add dark mode.
- Add smooth animations.

---

## Author

**Saad-fullsatck**

This project is part of my JavaScript learning journey. I built it to strengthen my understanding of DOM manipulation, event handling, and basic programming logic.