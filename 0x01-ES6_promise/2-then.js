export default function handleResponseFromAPI(promise) {
  const res = { status: 200, body: 'success' };
  return promise
    .then(() => res)
    .catch(() => Error())
    .finally(() => { console.log('Got a response from the API'); });
}
