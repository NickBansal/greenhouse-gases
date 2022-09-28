import baseRequest from './baseRequest.js';

function get(options) {
  return baseRequest({
    ...options,
    method: 'get',
  });
}

const http = {
  get,
};

export default http;
