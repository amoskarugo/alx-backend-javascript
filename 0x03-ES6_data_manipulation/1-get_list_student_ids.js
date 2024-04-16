function getListStudentIds(arr) {
  const ids = [];

  if (!Array.isArray(arr)) return [];

  arr.map((object) => {
    ids.push(object.id);
    return object.id;
  });

  return ids;
}
export default getListStudentIds;
