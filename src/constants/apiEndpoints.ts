export const BACKEND_AUTH_URL = process.env.REACT_APP_AUTH_URL || 'http://localhost:8002';
export const BACKEND_URL = process.env.REACT_APP_BACKEND_URL || 'http://localhost:8003/api'

export const LOGIN = {
  url: `${BACKEND_AUTH_URL}/login`,
  method: 'POST'
}

export const GET_ALL_CONTENT_TYPES = {
  url: `${BACKEND_URL}/contentTypes`,
  method: 'GET'
}

export const CREATE_FIELD = (contentTypeId: number | string) => {
  return {
    url: `${BACKEND_URL}/contentType/${contentTypeId}/fields`,
    method: 'POST'
  }
};

export const DELETE_FIELD = (contentTypeId: number | string, fieldId: number | string) => {
  return {
    url: `${BACKEND_URL}/contentType/${contentTypeId}/field/${fieldId}`,
    method: 'DELETE'
  }
};

export const RENAME_FIELD = (contentTypeId: number | string, fieldId: number | string) => {
  return {
    url: `${BACKEND_URL}/contentType/${contentTypeId}/field/${fieldId}`,
    method: 'PUT'
  }
};

export const CREATE_CONTENT_TYPE = {
  url: `${BACKEND_URL}/contentTypes`,
  method: 'POST'
}

export const GET_ALL_FIELDS_OF_CTYPE = (contentTypeId: number | string) => {
  return {
    url: `${BACKEND_URL}/contentType/${contentTypeId}/fields`,
    method: 'GET'
  }
}