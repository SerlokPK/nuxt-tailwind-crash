import axios from 'axios';

export default {
  request(method, uri, data = null, params = null, header = null) {
    if (!method) {
      console.error('API function call requires method argument');
      return;
    }
    if (!uri) {
      console.error('API function call requires uri argument');
      return;
    }
    let headers = {};
    if (process.browser) {
      headers = {
        Authorization: `JWT ${localStorage.token}`
      };
    }

    if (header) {
      Object.assign(headers, header);
    }
    const url = process.env.baseUri + uri;
    return axios({ method, url, data, headers, params });
  }
};
