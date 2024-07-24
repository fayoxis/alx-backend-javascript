import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default async function handleProfileSignup(firstName, lastName, fileName) {
  try {
    const [userSignup, photoUpload] = await Promise.allSettled([
      signUpUser(firstName, lastName),
      uploadPhoto(fileName),
    ]);

    return [userSignup, photoUpload].map((result) => {
      const { status, value, reason } = result;
      return {
        status,
        value: status === 'fulfilled' ? value : String(reason),
      };
    });
  } catch (error) {
    console.error('An error occurred during profile signup:', error);
    throw error;
  }
}
