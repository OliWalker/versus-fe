const initalState = {
  user: {},
  stats: {},
  matches: {},
  loading: false,
  error: '',
}

const reducer = (state=initalState, action) => {
  switch (action.type) {

    case 'GET_USER_INFO_REQUEST':
      return {
        ...state,
        loading: true
      }

    case 'GET_USER_INFO_SUCCESS':
      console.log(action.data)
      return {
        ...state,
        user: action.data.user,
        stats: action.data.stats,
        matches: action.data.matches,
        loading: false
      }

    case 'GET_USER_INFO_FAILURE':
      return {
        ...state,
        error: action.error,
        loading: false
      }

    default:
      return state

  }
}

export default reducer;