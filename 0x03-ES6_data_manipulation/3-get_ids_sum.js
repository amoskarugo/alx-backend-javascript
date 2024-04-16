function getStudentIdsSum(arr) {
  return arr.reduce((accumilator, student) => accumilator + student.id, 0);
}
export default getStudentIdsSum;
