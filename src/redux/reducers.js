const initalState = {
  loginError: false,
  user: {},
  stats: [],
  matches: [],
  loading: false,
  error: false,
  leagueNow: {},
  allLeagues: [],
  opponentNow: {},
  location: '',
  googlePlaces: {}
};

const reducer = (state = initalState, action) => {
  switch (action.type) {
    case 'LOG_IN_REQUEST':
      return {
        ...state,
        loading: true,
        loginError: false
      };

    case 'LOG_IN_SUCCESS':
      return {
        ...state,
        user: action.data.user,
        stats: action.data.stats,
        matches: action.data.matches,
        loginError: false,
        loading: false
      };

    case 'LOG_IN_FAILURE':
      return {
        ...state,
        loginError: true,
        loading: false
      };

    case 'LOG_OUT':
      return initalState;

    case 'Error':
      return {
        ...state,
        error: true
      };

    case 'GET_USER_INFO_REQUEST':
      return {
        ...state,
        loading: true
      };

    case 'GET_USER_INFO_SUCCESS':
      const newStats = [];
      const stats = action.data.stats;
      for (let sport in stats) {
        newStats.push(stats[sport]);
      }
      return {
        ...state,
        user: action.data.user,
        stats: newStats,
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

    case 'JOIN_LEAGUE_REQUEST':
      return {
        ...state,
        loading: true
      };

    case 'JOIN_LEAGUE_SUCCESS':
      return {
        ...state,
        stats: [...state.stats, action.data],
        loading: false
      };

    case 'JOIN_LEAGUE_FAILURE':
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
    case 'SEND_MATCH_DETAILS_REQUEST':
      return {
        ...state,
        loading: true
      };
    case 'SEND_MATCH_DETAILS_SUCCESS':
      const alteredMatches = state.matches.map(
        el => (el.match_id === action.data.match_id ? action.data : el)
      );
      return {
        ...state,
        matches: alteredMatches,
        loading: false
      };

    case 'SEND_MATCH_DETAILS_FAILURE':
      return {
        ...state,
        loading: false
      };

    case 'ACCEPT_MATCH_REQUEST':
      return {
        ...state,
        loading: true
      };

    case 'ACCEPT_MATCH_SUCCESS':
      const newMatchesAccepted = state.matches.map(
        el => (el.match_id === action.data.match_id ? (el = action.data) : el)
      );
      return {
        ...state,
        matches: newMatchesAccepted,
        loading: false
      };

    case 'ACCEPT_MATCH_FAILURE':
      return {
        ...state,
        error: action.error,
        loading: false
      };

    case 'DECLINE_MATCH_REQUEST':
      return {
        ...state,
        loading: true
      };

    case 'DECLINE_MATCH_SUCCESS':
      const newMatchesDeclined = state.matches.map(
        el => (el.match_id === action.data.match_id ? (el = action.data) : el)
      );
      return {
        ...state,
        matches: newMatchesDeclined,
        loading: false
      };

    case 'DECLINE_MATCH_FAILURE':
      return {
        ...state,
        error: action.error,
        loading: false
      };

    case 'FINISH_MATCH_REQUEST':
      return {
        ...state,
        loading: true
      };

    case 'FINISH_MATCH_SUCCESS':
      const newMatches = state.matches.map(
        el => (el.match_id === action.data.match_id ? (el = action.data) : el)
      );
      return {
        ...state,
        matches: newMatches,
        loading: false
      };

    case 'FINISH_MATCH_FAILURE':
      return {
        ...state,
        error: action.error,
        loading: false
      };

    case 'REQUEST_LOCATION_REQUEST':
      return {
        ...state,
        loading: true
      };

    case 'REQUEST_LOCATION_SUCCESS':
      return {
        ...state,
        googlePlaces: action.data,
        loading: false
      };

    case 'REQUEST_LOCATION_FAILURE':
      return {
        ...state,
        loading: false
      };

    case 'LOCATION_CHOSEN':
      return {
        ...state,
        location: action.location
      };

    case 'CREATE_USER_REQUEST':
      return {
        ...state,
        loading: true
      };

    case 'CREATE_USER_SUCCESS':
      return {
        ...state,
        user: action.data,
        loading: false
      };

    case 'CREATE_USER_FAILURE':
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
