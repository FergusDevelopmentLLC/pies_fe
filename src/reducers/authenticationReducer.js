import { 
          SIGNUP_REQUEST, 
          SIGNUP_SUCCESS, 
          SIGNUP_FAILURE, 
          LOGIN_REQUEST, 
          LOGIN_SUCCESS, 
          LOGIN_FAILURE, 
          CURRENT_USER_REFRESH_REQUEST, 
          CURRENT_USER_REFRESH_FAILURE, 
          CURRENT_USER_REFRESH_SUCCESS }
          from '../actions/types';

const initialState = {
  loggedIn: false,
  isLoading: false,
  user: {}
}

const authenticationReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        loggedIn: false,
        isLoading: true
      }
    case LOGIN_SUCCESS:
      return {
        loggedIn: true,
        isLoading: false,
        user: action.payload
      }
    case LOGIN_FAILURE:
      return {
        loggedIn: false,
        isLoading: false,
        errorMessage: action.error
      }
    case SIGNUP_REQUEST:
      return {
        ...state,
        loggedIn: false,
        isLoading: true
      }
    case SIGNUP_SUCCESS:
      return {
        loggedIn: true,
        isLoading: false,
        user: action.payload
      }
    case SIGNUP_FAILURE:
      return {
        loggedIn: false,
        isLoading: false,
        errorMessage: action.error
      }
    case CURRENT_USER_REFRESH_REQUEST:
      return {
        ...state,
        isLoading: true
      }
    case CURRENT_USER_REFRESH_SUCCESS:
      return {
        ...state,
        loggedIn: true,
        isLoading: false,
        user: action.payload
      }
    case CURRENT_USER_REFRESH_FAILURE:
      return {
        loggedIn: false,
        isLoading: false,
        errorMessage: action.payload
      }
    default:
      return state
  }
}

export default authenticationReducer