export default function signUpUser(firstName, lastName) {
  const userData = { firstName, lastName };
  return new Promise((resolve) => {
    resolve(userData);
  });
}
