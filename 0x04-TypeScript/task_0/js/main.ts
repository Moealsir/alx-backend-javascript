export interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: "Mohamed",
  lastName: "Suliman",
  age: 25,
  location: "Qatar, Duha",
};

const student2: Student = {
  firstName: "Mohamed",
  lastName: "Ali",
  age: 24,
  location: "Egypt, Cairo",
};

// Add students to the studentsList array
const studentsList: Student[] = [student1, student2];

// Create a table and append it to the document body
const table = document.createElement("table");
document.body.appendChild(table);

// Loop through each student and create a table row with their details
studentsList.forEach(student => {
  const row = document.createElement("tr");
  const firstNameCell = document.createElement("td");
  const locationCell = document.createElement("td");

  firstNameCell.textContent = student.firstName;
  locationCell.textContent = student.location;

  row.appendChild(firstNameCell);
  row.appendChild(locationCell);
  table.appendChild(row);
});