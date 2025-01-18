# GPA and CGPA Calculator

This project is a web application that allows users to calculate their GPA and CGPA. The application is built using HTML, CSS, and JavaScript, offering a simple and intuitive user interface for inputting course details and generating results.

---

## Features

- **GPA Calculation**:
  - Users can enter their current semester courses, including course name, course unit, and grade.
  - The app calculates the GPA based on the provided details.
- **CGPA Calculation**:
  - Users can input their previous CGPA and the current semester's data.
  - The app calculates the new CGPA, factoring in both previous and current semester performances.
- **Dynamic UI**:
  - Add or remove courses dynamically.
  - A clean and responsive design.

---

## How to Use

1. **Add Courses**:
   - Enter the course name, course unit, and grade for each course.
   - Click the "Add" button to add the course to the table.
2. **Calculate GPA**:
   - After entering all courses for the current semester, click the "Calculate GPA" button.
   - The calculated GPA will be displayed.
3. **Calculate CGPA**:
   - Enter your previous CGPA.
   - Click the "Calculate CGPA" button to get your updated CGPA.

---

## Formulae Used

### GPA Calculation:

```text
GPA = (Sum of (Course Unit * Grade)) / (Total Course Units)
```

### CGPA Calculation:

```text
CGPA = (Previous CGPA * Previous Total Units + Current GPA * Current Total Units) / (Previous Total Units + Current Total Units)
```

---

## Technologies Used

- **Frontend**:
  - HTML
  - CSS
  - JavaScript
- **Libraries**:
  - Font Awesome (for icons)

---

## Setup

To use this project online:

1. visit: [cgpa-calculator-snowy-one.vercel.app](https://cgpa-calculator-snowy-one.vercel.app/)

To use this project locally:

1. Clone the repository:
   ```bash
   git clone https://github.com/jika026/CGPA-CALCULATOR.git
   ```
2. Open the `index.html` file in your browser.
3. Start adding courses and calculating your GPA or CGPA!

---

## Contribution

Contributions are welcome! Feel free to:

- Fork the project.
- Create a new branch.
- Submit a pull request with your changes.

---

## Author

Built by [Yahaya Abdullahi Mana](https://github.com/jika026).

---

## License

This project is licensed under the [MIT License](LICENSE).
