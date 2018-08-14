const BASE_URL = 'http://private-1cf21-versus3.apiary-mock.com';

export default store => next => action => {

  if(!action.api) return next(action);
  console.log("api called")

  const { endpoint, method } = action.api;
  let { body, headers } = action.api;

  const defaultHeaders = {};

  if (body) {
    body = JSON.stringify(body);
    defaultHeaders['Content-type'] = 'application/json';
  }

  headers = {
    ...defaultHeaders,
    ...headers,
  }

  next({
    ...action,
    type: `${action.type}_REQUEST`
  });


  fetch(`${BASE_URL}${endpoint}`, {
    method: method || 'GET',
    body,
    headers,
  })
  .then(response => response.json())
  .then(response => {
    console.log("API-MIDLLEWARE", response)
    return response
  })
  .then(data => {
    store.dispatch({
      ...action,
      type: `${action.type}_SUCCESS`,
      api: undefined,
      data,
    })
  })
  .catch(error => {
    console.log(error)
    store.dispatch({
      ...action,
      type: `${action.type}_FAILURE`,
      api: undefined,
      error,
    })
  })
}