import axios from 'axios';
import { BACKEND_URL } from '../../constants/apiEndpoints';

export interface ApiEndpoint {
  url: string,
  method: string
}

const makeRequest = async (
  apiEndpoint: ApiEndpoint,
  options?: object,
  withAuth?: boolean
) => {
  console.log(withAuth);
  if (withAuth == undefined) {
    withAuth = true;
    console.log(localStorage.getItem('jwt'))
  }

  const requestConfig = !withAuth ? {
    baseURL: BACKEND_URL,
    url: apiEndpoint.url,
    method: apiEndpoint.method,
    ...options
  } : localStorage.getItem('jwt') != null ? {
    baseURL: BACKEND_URL,
    url: apiEndpoint.url,
    method: apiEndpoint.method,
    headers: {
      'Authorization': `Bearer ${localStorage.getItem('jwt')}`
    },
    ...options
  } : {
    baseURL: BACKEND_URL,
    url: apiEndpoint.url,
    method: apiEndpoint.method,
    ...options
  };

  console.log(requestConfig);

  const { data } = await axios(requestConfig);
  return data;
}

export default makeRequest;
