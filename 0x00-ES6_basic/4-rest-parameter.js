export default function returnHowManyArguments(...args) {
  let sum = 0;
  for (const arg of args) sum += 1;
  return sum;
}
