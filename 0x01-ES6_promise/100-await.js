import { uploadPhoto, createUser } from './utils';

const asyncUploadUser = async () => {
  try {
    const photoPromise = uploadPhoto();
    const userPromise = createUser();

    const [photo, user] = await Promise.all([photoPromise, userPromise]);
    return { photo, user };
  } catch (err) {
    return { photo: null, user: null };
  }
};

export default asyncUploadUser;
