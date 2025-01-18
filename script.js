let courses = [];
document.getElementById("addCourse").addEventListener("click", () => {
  const courseName = document.getElementById("courseName").value;
  const courseUnits = parseInt(document.getElementById("courseUnits").value);
  const grade = parseInt(document.getElementById("grade").value);

  if (courseName && courseUnits && grade !== null) {
    courses.push({ courseName, courseUnits, grade });
    displayCourses();
    calculateCGPA();
  }
});

function displayCourses() {
  const courseItems = document.getElementById("courseItems");
  courseItems.innerHTML = "";

  courses.forEach((course, index) => {
    const listItem = document.createElement("li");
    listItem.textContent = `${course.courseName} - Units: ${course.courseUnits}, Grade: ${course.grade}`;
    const removeButton = document.createElement("button");
    removeButton.textContent = "Remove";
    removeButton.className = "text-red-500 ml-2";
    removeButton.onclick = () => removeCourse(index);

    listItem.appendChild(removeButton);
    courseItems.appendChild(listItem);
  });
}

function removeCourse(index) {
  courses.splice(index, 1);
  displayCourses();
  calculateCGPA();
}

function calculateCGPA() {
  const prevCgpa = parseFloat(document.getElementById("prevCgpa").value) || 0;
  const prevUnits = parseInt(document.getElementById("prevUnits").value) || 0;

  const totalCurrentUnits = courses.reduce((sum, c) => sum + c.courseUnits, 0);
  const currentGPA =
    totalCurrentUnits === 0
      ? 0
      : courses.reduce((sum, c) => sum + c.courseUnits * c.grade, 0) /
        totalCurrentUnits;

  const totalUnits = prevUnits + totalCurrentUnits;
  const newCgpa =
    totalUnits === 0
      ? 0
      : (prevCgpa * prevUnits + currentGPA * totalCurrentUnits) / totalUnits;

  document.getElementById("cgpaResult").innerText = newCgpa.toFixed(2);
}
