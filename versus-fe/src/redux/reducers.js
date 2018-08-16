const initalState = {
  user: {},
  stats: [],
  matches: [],
  loading: false,
  error: false,
  leagueNow: {},
  allLeagues: [],
  opponentNow: {},
  matchMade: false
};

const reducer = (state = initalState, action) => {
  switch (action.type) {
    case 'GET_USER_INFO_REQUEST':
      return {
        ...state,
        loading: true
      };

    case 'GET_USER_INFO_SUCCESS':
      console.log(action.data);
      return {
        ...state,
        user: action.data.user,
        stats: action.data.stats,
        matches: action.data.matches,
        loading: false
      };

    case 'GET_USER_INFO_FAILURE':
      return {
        ...state,
        error: action.error,
        loading: false
      };

    case 'GET_ONE_LEAGUE_REQUEST':
      return {
        ...state,
        loading: true
      };

    case 'GET_ONE_LEAGUE_SUCCESS':
      return {
        ...state,
        leagueNow: action.data,
        loading: false
      };

    case 'GET_ONE_LEAGUE_FAILURE':
      return {
        ...state,
        error: action.error,
        loading: false
      };

    case 'GET_All_LEAGUES_REQUEST':
      return {
        ...state,
        loading: true
      };

    case 'GET_All_LEAGUES_SUCCESS':
      return {
        ...state,
        allLeagues: action.data,
        loading: false
      };

    case 'GET_All_LEAGUES_FAILURE':
      return {
        ...state,
        error: action.error,
        loading: false
      };

    case 'GET_OPPONENT_REQUEST':
      return {
        ...state,
        loading: true
      };

    case 'GET_OPPONENT_SUCCESS':
      return {
        ...state,
        opponentNow: action.data,
        loading: false
      };

    case 'GET_OPPONENT_FAILURE':
      return {
        ...state,
        error: action.error,
        loading: false
      };

    case 'CREATE_MATCH_REQUEST':
      return {
        ...state,
        loading: true
      };

    case 'CREATE_MATCH_SUCCESS':
      return {
        ...state,
        matches: [...state.matches, action.data],
        matchMade: true,
        loading: false
      };

    case 'CREATE_MATCH_FAILURE':
      return {
        ...state,
        error: action.error,
        loading: false
      };

    case 'REMOVE_OPPONENT':
      return {
        ...state,
        opponentNow: {}
      };

    default:
      return state;
  }
};

export default reducer;
