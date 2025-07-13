function addRow() {
  const container = document.getElementById("subjects");
  const row = document.createElement("div");
  row.className = "input-row";
  row.innerHTML = `
    <select class="grade">
        <option value="4">A</option>
        <option value="3.67">A-</option>
        <option value="3.33">B+</option>
        <option value="3">B</option>
        <option value="2.67">B-</option>
        <option value="2.33">C+</option>
        <option value="2">C</option>
        <option value="1.67">C-</option>
        <option value="1.33">D+</option>
        <option value="1">D</option>
        <option value="0">F</option>
    </select>
    <input type="number" placeholder="Кредиты" class="credit">
    <button class="remove-btn" onclick="removeRow(this)">✖</button>
  `;
  container.appendChild(row);
}

function removeRow(button) {
  const row = button.parentElement;
  row.remove();
}

function calculateGPA() {
  const grades = document.querySelectorAll(".grade");
  const credits = document.querySelectorAll(".credit");

  let totalPoints = 0;
  let totalCredits = 0;

  for (let i = 0; i < grades.length; i++) {
    const grade = parseFloat(grades[i].value);
    const credit = parseFloat(credits[i].value);

    if (!isNaN(grade) && !isNaN(credit)) {
      totalPoints += grade * credit;
      totalCredits += credit;
    }
  }

  const result = document.getElementById("result");
  result.classList.remove("show");

  if (totalCredits > 0) {
    const gpa = (totalPoints / totalCredits).toFixed(2);
    result.textContent = "Ваш GPA: " + gpa;
    result.classList.add("show");
  } else {
    result.textContent = "Введите корректные данные.";
  }
}
