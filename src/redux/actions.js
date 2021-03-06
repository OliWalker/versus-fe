export const logIn = apiInfo => ({
  type: 'LOG_IN',
  api: {
    endpoint: apiInfo.endpoint,
    method: apiInfo.method,
    body: apiInfo.body,
    headers: apiInfo.headers
  }
});

export const logOut = () => ({
  type: 'LOG_OUT'
});

export const signUp = apiInfo => ({
  type: 'SIGN_UP',
  api: {
    endpoint: apiInfo.endpoint,
    method: apiInfo.method,
    body: apiInfo.body,
    headers: apiInfo.headers
  }
});

export const sendError = () => ({
  type: 'ERROR'
});

export const getUserInfo = apiInfo => ({
  type: 'GET_USER_INFO',
  api: {
    endpoint: apiInfo.endpoint,
    method: apiInfo.method,
    body: apiInfo.body,
    headers: apiInfo.headers
  }
});

export const getOneLeague = apiInfo => ({
  type: 'GET_ONE_LEAGUE',
  api: {
    endpoint: apiInfo.endpoint,
    method: apiInfo.method,
    body: apiInfo.body,
    headers: apiInfo.headers
  }
});

export const getAllLeagues = apiInfo => ({
  type: 'GET_All_LEAGUES',
  api: {
    endpoint: apiInfo.endpoint,
    method: apiInfo.method,
    body: apiInfo.body,
    headers: apiInfo.headers
  }
});

export const joinLeague = apiInfo => ({
  type: 'JOIN_LEAGUE',
  api: {
    endpoint: apiInfo.endpoint,
    method: apiInfo.method,
    body: apiInfo.body,
    headers: apiInfo.headers
  }
});

export const getOpponent = apiInfo => ({
  type: 'GET_OPPONENT',
  api: {
    endpoint: apiInfo.endpoint,
    method: apiInfo.method,
    body: apiInfo.body,
    headers: apiInfo.headers
  }
});

export const createMatch = apiInfo => ({
  type: 'CREATE_MATCH',
  api: {
    endpoint: apiInfo.endpoint,
    method: apiInfo.method,
    body: apiInfo.body,
    headers: apiInfo.headers
  }
});

export const removeOpponent = () => ({
  type: 'REMOVE_OPPONENT'
});

export const acceptMatch = apiInfo => ({
  type: 'ACCEPT_MATCH',
  api: {
    endpoint: apiInfo.endpoint,
    method: apiInfo.method,
    body: apiInfo.body,
    headers: apiInfo.headers
  }
});

export const declineMatch = apiInfo => ({
  type: 'DECLINE_MATCH',
  api: {
    endpoint: apiInfo.endpoint,
    method: apiInfo.method,
    body: apiInfo.body,
    headers: apiInfo.headers
  }
});

export const deleteMatch = apiInfo => ({
  type: 'DELETE_MATCH',
  api: {
    endpoint: apiInfo.endpoint,
    method: apiInfo.method,
    body: apiInfo.body,
    headers: apiInfo.headers
  }
});

export const sendMatchDetails = apiInfo => ({
  type: 'SEND_MATCH_DETAILS',
  api: {
    endpoint: apiInfo.endpoint,
    method: apiInfo.method,
    body: apiInfo.body,
    headers: apiInfo.headers
  }
});

export const finishMatch = apiInfo => ({
  type: 'FINISH_MATCH',
  api: {
    endpoint: apiInfo.endpoint,
    method: apiInfo.method,
    body: apiInfo.body,
    headers: apiInfo.headers
  }
});

export const requestLocation = apiInfo => ({
  type: 'REQUEST_LOCATION',
  api: {
    endpoint: apiInfo.endpoint,
    method: apiInfo.method,
    body: apiInfo.body,
    headers: apiInfo.header
  }
});

export const createUser = apiInfo => ({
  type: 'CREATE_USER',
  api: {
    endpoint: apiInfo.endpoint,
    method: apiInfo.method,
    body: apiInfo.body,
    headers: apiInfo.headers
  }
});

export const locationChosen = info => ({
  type: 'LOCATION_CHOSEN',
  location: info
});
