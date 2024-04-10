import { uploadPhoto } from './utils';
import { signUpUser } from './4-user-promise';

export default function handleProfileSignup(firstName, lastName, filename) {
  return Promise.allSettled([
    signUpUser(firstName, lastName),
    uploadPhoto(fileName),
  ]).then((res) =>
    res.map((o) => ({
      status: o.status,
      value: o.status === 'fulfilled' ? o.value : String(o.reason),
    }))
  );
}
