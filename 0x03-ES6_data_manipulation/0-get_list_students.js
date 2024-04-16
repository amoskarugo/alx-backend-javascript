export default function getListStudents() {
  const students = [
    ['Guillaume', 1, 'San Francisco'],
    ['James', 2, 'Columbia'],
    ['Serena', 5, 'San Francisco'],
  ];

  const studentObjects = [];

  for (let i = 0; i < students.length; i++) {
    const student = new Object();
    student.firstName = students[i][0];
    student.id = students[i][1];
    student.location = students[i][2];
    studentObjects.push(student);
  }

  return studentObjects;
}
