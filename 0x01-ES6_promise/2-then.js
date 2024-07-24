export default function handleResponseFromAPI(promise) {
  return promise
    .catch(() => new Error())
    .then(() => ({ status: 200, body: 'success' }))
    .finally(() => console.log('Got a response from the API'));
}
