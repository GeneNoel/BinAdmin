import config from './config';
import requests from './http';

const parseResponse = (res) => res;

const endpoint = `${config.getBaseUrl()}`;

export default {
  auth: {
    signup(data) {
      return requests.post(`${endpoint}users/sign_up`, data).then(parseResponse);
    },

    login(data) {
      return requests.post(`${endpoint}/sessions/`, data).then(parseResponse);
    },
  },
};
