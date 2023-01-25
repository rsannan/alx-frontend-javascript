import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  const promise1 = uploadPhoto();
  const promise2 = createUser();

  return Promise.all([
    promise1,
    promise2,
  ]).then((res) => {
    const fname = res[1].firstName;
    const lname = res[1].lastName;
    const bod = res[0].body;
    console.log(`${bod} ${fname} ${lname}`);
  }).catch(() => { console.log('Signup system offline'); });
}
