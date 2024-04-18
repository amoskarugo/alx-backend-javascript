interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const studentOne: Student = {
  firstName: 'mario',
  lastName: 'yoshi',
  age: 27,
  location: 'San Fransisco',
};
const studentTwo: Student = {
  firstName: 'amos',
  lastName: 'karugo',
  age: 27,
  location: 'Colorado',
};

const studentsList: Array<Student> = [studentOne, studentTwo];

export const renderTable = (studentsList: Array<Student>): void => {
  // create table tag
  const table = document.createElement('table');
  const headRow = document.createElement('tr');
  table.insertAdjacentElement('beforeend', headRow);

  // insert headers
  headRow.insertAdjacentHTML('beforeend', '<th>FirstName</th>');
  headRow.insertAdjacentHTML('beforeend', '<th>Location</th>');

  for (const student of studentsList) {
    const studentRow = document.createElement('tr');
    studentRow.insertAdjacentHTML('beforeend', `<td>${student.firstName}</td>`);
    studentRow.insertAdjacentHTML('beforeend', `<td>${student.location}</td>`);
    table.insertAdjacentElement('beforeend', studentRow);
  }

  document.body.insertAdjacentElement('beforeend', table);
};

renderTable(studentsList);
