import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  const promise1 = signUpUser(firstName, lastName);
  const promise2 = uploadPhoto(fileName);
  const promises = [promise1, promise2];
  const arr = [];
  Promise.allSettled(promises).then((results) => {
    results.forEach((result) => {
      const stat = result.status;
      let val = '';
      if (stat === 'fulfilled') {
        val = result.value;
      } else { val = result.reason.message; }
      const obj = { status: stat, value: val };
      console.log(obj);
      arr.push(obj);
    });
    console.log(arr);
  });
}
