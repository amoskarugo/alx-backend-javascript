export default function handleResponseFromAPI(promise) {
  promise
    .then((res) => console.log('Got a response from the API'))
    .catch((err) => console.log('Got a response from the API'));
}
