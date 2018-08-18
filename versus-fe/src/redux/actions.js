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

export const sendMatchDetails = () => ({
  type: 'SEND_MATCH_DETAILS'
})
