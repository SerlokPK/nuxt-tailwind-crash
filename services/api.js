import axios from 'axios';

const baseUri = 'www.base/api';

export function post(uri, data) {
  return axios.post(`${baseUri}/${uri}`, data, {
    headers: getHeaders(),
    withCredentials: true
  });
}

export function put(uri, data) {
  return axios.put(`${baseUri}/${uri}`, data, {
    headers: getHeaders(),
    withCredentials: true
  });
}

export function remove(uri) {
  return axios.delete(`${baseUri}/${uri}`, {
    headers: getHeaders(),
    withCredentials: true
  });
}

export function get(uri, data = {}) {
  if (Object.keys(data).length > 0) {
    uri = `${baseUri}/${uri}?${qs(data)}`;
  }

  return axios.get(uri, {
    headers: getHeaders(),
    withCredentials: true
  });
}

function getHeaders() {
  let headers = {
    Accept: 'application/json'
  };

  if (localStorage.token) {
    headers = {
      Authorization: `JWT ${localStorage.token}`,
      ...headers
    };
  }

  return headers;
}

function qs(params) {
  return Object.keys(params)
    .map(k => esc(k) + '=' + esc(params[k]))
    .join('&');
}
