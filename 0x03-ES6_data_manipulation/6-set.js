export default function setFromArray(array) {
  const mySet = new Set();
  for (const ele of array) {
    mySet.add(ele);
  }
  return mySet;
}
