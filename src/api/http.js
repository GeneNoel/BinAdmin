import axios from 'axios';

const parseResponse = (res) => res;
const handleError = (err) => {
  throw err;
};

const https = axios.create({
  baseURL: 'https://smartbin-app-1.herokuapp.com/',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
    'Access-Control-Allow-Origin': '*',
  },
});

const requests = {
  get: (url) =>
    https
      .get(url)
      .then(parseResponse)
      .then((response) => (response ? response : handleError(response.data)))
      .catch(handleError),
  post: (url, data) =>
    https
      .post(url, data)
      .then(parseResponse)
      .then((response) => (response ? response : handleError(response.data)))
      .catch(handleError),
  put: (url, data) =>
    https
      .put(url, data)
      .then(parseResponse)
      .then((response) => (response ? response : handleError(response.data)))
      .catch(handleError),
  patch: (url, data) =>
    https
      .patch(url, data)
      .then(parseResponse)
      .then((response) => (response ? response : handleError(response.data)))
      .catch(handleError),
  delete: (url) =>
    https
      .delete(url)
      .then(parseResponse)
      .then((response) => (response ? response : handleError(response.data)))
      .catch(handleError),
};

export { https, parseResponse, handleError };
export default requests;
