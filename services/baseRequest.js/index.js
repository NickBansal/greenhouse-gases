/* eslint-disable no-promise-executor-return */
import axios from 'axios';

export default function baseRequest({ url, method }) {
  const config = {
    method: method || 'GET',
    url,
    header: 'accept: application/json',
  };

  const request = axios(url, config);

  return request.then((response) => ({
    success: true,
    response: response.data,
    error: false,
  })).catch((error) => ({
    success: false,
    error,
  }));
}
