const initalState = {
  user: {},
  stats: [],
  matches: [],
  loading: false,
  error: false,
  leagueNow: {},
  allLeagues: [],
  opponentNow: {}
};

const reducer = (state = initalState, action) => {
  switch (action.type) {
    case 'GET_USER_INFO_REQUEST':
      return {
        ...state,
        loading: true
      };

    case 'GET_USER_INFO_SUCCESS':
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

    case 'ACCEPT_MATCH_REQUEST':
      return {
        ...state,
        loading: true
      };

    case 'ACCEPT_MATCH_SUCCESS':
      const newMatches = state.matches.map(
        el => (el.match_id === action.data.match_id ? (el = action.data) : el)
      );
      return {
        ...state,
        matches: newMatches,
        loading: false
      };

    case 'ACCEPT_MATCH_FAILURE':
      return {
        ...state,
        error: action.error,
        loading: false
      };

    default:
      return state;
  }
};

export default reducer;
