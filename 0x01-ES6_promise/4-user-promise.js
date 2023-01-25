export default function signUpUser(firstName, lastName) {
  const promise1 = Promise.resolve({
    firstName,
    lastName,
  });
  return promise1;
}
