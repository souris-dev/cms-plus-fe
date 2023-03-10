import axios from 'axios';
import { BACKEND_URL } from '../../constants/apiEndpoints';

export interface ApiEndpoint {
  url: string,
  method: string
}

const makeRequest = async (
  apiEndpoint: ApiEndpoint,
  options?: object
) => {
  const requestConfig = {
    baseURL: BACKEND_URL,
    url: apiEndpoint.url,
    method: apiEndpoint.method,
    ...options
  }

  const { data } = await axios(requestConfig);
  return data;
}

export default makeRequest;
