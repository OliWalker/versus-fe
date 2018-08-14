export const getUserInfo = (apiInfo) => ({
  type: 'GET_USER_INFO',
  api: {
    endpoint: apiInfo.endpoint,
    method: apiInfo.method,
    body: apiInfo.body,
    headers: apiInfo.headers
  }
})





