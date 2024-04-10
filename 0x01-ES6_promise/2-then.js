export default function handleResponseFromAPI(promise) {
  promise
    .then((res) => res)
    .catch((err) => err)
    .finally(console.log('Got a response from the API'));
}
