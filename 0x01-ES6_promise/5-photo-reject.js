const uploadPhoto = filename => {
  return new Promise((_, reject) => {
    reject(new Error(`${filename} cannot be processed`));
  });
};

export default uploadPhoto;
