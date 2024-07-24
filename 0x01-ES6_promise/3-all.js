import { uploadPhoto, createUser } from './utils';

export default async function handleProfileSignup() {
  try {
    const [photoUploadRes, userCreationRes] = await Promise.all([uploadPhoto(), createUser()]);
    console.log(`${photoUploadRes.body} ${userCreationRes.firstName} ${userCreationRes.lastName}`);
  } catch (error) {
    console.log('Signup system offline');
  }
}
