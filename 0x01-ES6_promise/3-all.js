import { uploadPhoto, createUser } from './utils.js';
function handleProfileSignup() {
  const [promise1, promise2] = [uploadPhoto(), createUser()];
  Promise.all([promise1, promise2])
    .then(([result1, result2]) => {
      console.log(
        `${result1['body']} ${result2['firstName']} ${result2['lastName']}`
      );
    })
    .catch(() => console.log('Signup system offline'));
}

export default handleProfileSignup;
