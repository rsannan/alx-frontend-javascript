export default function handleResponseFromAPI(promise) {
  const Mypromise = new Promise((resolve, reject) => {
    resolve({
      status: 200,
      body: 'Success',
    });
    reject(
      Error(),
    );
    promise.then(() => console.log('Got a response from the API'));
  });
  return Mypromise;
}
