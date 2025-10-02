//-------------------------EXERCICE 1-------------------------
// Interface Teacher avec readonly et index signature
interface Teacher {
  readonly firstName: string;    // readonly = ne peut pas être modifié après création
  readonly lastName: string;     // readonly = ne peut pas être modifié après création
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;    // ? = optionnel
  location: string;
  [key: string]: any;            // index signature = propriétés dynamiques
}

// Exemple d'utilisation
const teacher3: Teacher = {
  firstName: 'John',
  fullTimeEmployee: false,
  lastName: 'Doe',
  location: 'London',
  contract: false,  // ← propriété dynamique ajoutée grâce à l'index signature
};

console.log(teacher3);

//-------------------------EXERCICE 2-------------------------
// Interface Directors qui hérite de Teacher
interface Directors extends Teacher {
  numberOfReports: number;
}

// Exemple d'utilisation
const director1: Directors = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17,  // 
};

console.log(director1);


//-------------------------EXERCICE 3-------------------------
interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

// Fonction printTeacher
const printTeacher: printTeacherFunction = (firstName, lastName) => {
  // Prendre la première lettre du prénom
  const firstLetter = firstName.charAt(0);
  
  return `${firstLetter}. ${lastName}`;
};

// Tests
console.log(printTeacher("John", "Doe"));    
console.log(printTeacher("Alice", "Martin"));

//-------------------------EXERCICE 4-------------------------
// Interface pour le constructeur de StudentClass
interface StudentConstructor {
  new (firstName: string, lastName: string): StudentClassInterface;
}

// Interface pour la classe StudentClass
interface StudentClassInterface {
  firstName: string;
  lastName: string;
  workOnHomework(): string;
  displayName(): string;
}

// Classe StudentClass
class StudentClass implements StudentClassInterface {
  firstName: string;
  lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomework(): string {
    return "Currently working";
  }

  displayName(): string {
    return this.firstName;
  }
}

// Tests
const student = new StudentClass("Alice", "Martin");
console.log(student.displayName());      // Affiche : Alice
console.log(student.workOnHomework());   // Affiche : Currently working

