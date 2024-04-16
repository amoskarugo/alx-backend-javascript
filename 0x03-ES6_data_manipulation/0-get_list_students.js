function getListStudents() {
  const students = [
    ['Guillaume', 1, 'San Francisco'],
    ['James', 2, 'Columbia'],
    ['Serena', 5, 'San Francisco'],
  ];

  const studentObjects = [];

  for (let i = 0; i < students.length; i += 1) {
    const student = { firstName: '', id: '', location: '' };
    [student.firstName, ,] = students[i];
    [, student.id] = students[i];
    [, , student.location] = students[i];
    studentObjects.push(student);
  }

  return studentObjects;
}
// export default getListStudents;
console.log(getListStudents());
