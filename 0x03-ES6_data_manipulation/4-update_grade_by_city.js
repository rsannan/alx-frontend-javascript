export default function updateStudentGradeByCity(array, city, grades) {
  const loc = array.filter((obj) => obj.location === city);
  const arr = [];
  loc.map((x) => {
    const obj = x;
    for (const g of grades) {
      if (g.studentId === obj.id) {
        obj.grade = g.grade;
      }
    }
    if (!('grade' in obj)) {
      obj.grade = 'N/A';
    }
    arr.push(obj);
    return 'end';
  });
  return arr;
}
