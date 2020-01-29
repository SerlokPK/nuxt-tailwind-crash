export default function({ $axios, redirect }) {
  $axios.setBaseURL('https://jsonplaceholder.typicode.com');
  $axios.setHeader('Accept', 'application/json');

  $axios.onError(error => {
    const code = parseInt(error.response && error.response.status);
    if (code === 400) {
      redirect('/400');
    }
  });
}
