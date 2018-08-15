export const getUserInfo = (apiInfo) => ({
  type: 'GET_USER_INFO',
  api: {
    endpoint: apiInfo.endpoint,
    method: apiInfo.method,
    body: apiInfo.body,
    headers: apiInfo.headers
  }
})

export const getOneLeague = (apiInfo) => ({
  type: 'GET_ONE_LEAGUE',
  api: {  
    endpoint: apiInfo.endpoint,
    method: apiInfo.method,
    body: apiInfo.body,
    headers: apiInfo.headers
  }
})

export const getAllLeagues = (apiInfo) => ({
  type: 'GET_All_LEAGUES',
  api: {  
    endpoint: apiInfo.endpoint,
    method: apiInfo.method,
    body: apiInfo.body,
    headers: apiInfo.headers
  }
})




