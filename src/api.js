// commonApiFunction.js

import axios from 'axios';

const createApiInstance = (headers = {}) => {
  return axios.create({
    headers: {
      'Content-Type': 'application/json',
      ...headers,
    },
  });
};

const commonApiFunction = async (endpoint, method = 'GET', data = null, options = {}) => {
  try {
    const { headers, params, ...axiosOptions } = options;

    const apiInstance = createApiInstance(headers);

    const response = await apiInstance({
      method,
      url: `http://localhost:3000/api/v1${endpoint}`, 
      data,
      params,
      ...axiosOptions,
    });
    return response.data;
  } catch (error) {
    console.error('API Error:', error);
    throw error;
  }
};

export default commonApiFunction;
