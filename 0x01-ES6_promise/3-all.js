import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  const promise1 = uploadPhoto();
  const promise2 = createUser();

  Promise.all([
    promise1,
    promise2,
  ]).then((res) => {
    const fname = res[1].firstName;
    const lname = res[1].lastName;
    const { body } = res[0];
    console.log(`${body} ${fname} ${lname}`);
  })
    .catch(() => { console.log('Signup system offline'); });
}
