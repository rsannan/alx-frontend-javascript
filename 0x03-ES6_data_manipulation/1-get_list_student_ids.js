export default function getListStudentIds(array) {
  if (Array.isArray(array)) {
    const map1 = array.map((x) => x.id);
    return map1;
  }
  return [];
}
