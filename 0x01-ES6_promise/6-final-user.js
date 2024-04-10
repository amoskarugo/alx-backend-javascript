import { uploadPhoto } from './utils';
import { signUpUser } from './4-user-promise';

export default function handleProfileSignup(firstName, lastName, filename) {
  return Promise.allSettled([
    signUpUser(firstName, lastName),
    uploadPhoto(filename),
  ]).then((res) => {
    res.map((data) => ({
      status: data.status,
      value: data.status === 'fulfilled' ? data.value : String(data.reason),
    }));
  });
}
