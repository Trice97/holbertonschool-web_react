// Définition de l'interface Student
interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

// Création du premier étudiant
const student1: Student = {
  firstName: "Trice",
  lastName: "Bolin",
  age: 22,
  location: "Grigny"
};

// Création du deuxième étudiant
const student2: Student = {
  firstName: "John",
  lastName: "Doe",
  age: 25,
  location: "San Francisco"
};

// Création du tableau contenant les étudiants
const studentsList: Student[] = [student1, student2];

// Création du tableau HTML
const table = document.createElement('table');
const tbody = document.createElement('tbody');

// Pour chaque étudiant dans le tableau
studentsList.forEach((student) => {
  // Créer une nouvelle ligne
  const row = document.createElement('tr');
  
  // Créer la cellule pour le prénom
  const cellFirstName = document.createElement('td');
  cellFirstName.textContent = student.firstName;
  
  // Créer la cellule pour la localisation
  const cellLocation = document.createElement('td');
  cellLocation.textContent = student.location;
  
  // Ajouter les cellules à la ligne
  row.appendChild(cellFirstName);
  row.appendChild(cellLocation);
  
  // Ajouter la ligne au tbody
  tbody.appendChild(row);
});

// Ajouter le tbody au tableau
table.appendChild(tbody);

// Ajouter le tableau à la page
document.body.appendChild(table);
