import getListStudentIds from './1-get_list_student_ids';

export default function getStudentIdsSum(array) {
  const arr = getListStudentIds(array);
  const sum = arr.reduce((accumulator, currentValue) => accumulator + currentValue);
  return sum;
}
