export default function updateStudentGradeByCity(arr, location, newgrades) {
  const newArr = arr.filter((student) => student.location === location);
  return newArr.map((student) => ({
    ...student,
    grade:
      newgrades.filter((grade) => grade.studentId === student.id).length > 0
        ? newgrades.filter((grade) => grade.studentId === student.id)[0].grade
        : 'N/A',
  }));
}
