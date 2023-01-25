export default function handleResponseFromAPI(promise) {
  return promise
    .then(() => { return { status: 200, body: 'success' } })
    .then(() => console.log('Got a response from the API'))
    .catch(() => Error());
}
