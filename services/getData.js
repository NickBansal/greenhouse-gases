/* eslint-disable no-promise-executor-return */
import axios from 'axios';

const get = (url) => {
  const config = {
    method: 'GET',
    url,
    header: 'accept: application/json',
  };

  const request = axios(url, config);

  return request.then((response) => new Promise((resolve) => resolve({
    success: true,
    response,
    error: false,
  }))).catch((error) => new Promise((resolve) => resolve({
    success: false,
    error,
  })));
};

const http = {
  get,
};

export default http;
