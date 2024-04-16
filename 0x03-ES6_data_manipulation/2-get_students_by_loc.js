function getStudentsByLocation(arr, location) {
  return arr.filter((object) => object.location === location);
}
export default getStudentsByLocation;
