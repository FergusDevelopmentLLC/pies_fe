import {  
          CREATE_PIE_REQUEST,
          CREATE_PIE_SUCCESS,
          CREATE_PIE_FAILURE,
          FETCH_PIE_REQUEST, 
          FETCH_PIE_SUCCESS, 
          FETCH_PIE_FAILURE, 
          UPDATE_PIE_REQUEST, 
          UPDATE_PIE_SUCCESS, 
          UPDATE_PIE_FAILURE, 
          DELETE_PIE_REQUEST,
          DELETE_PIE_SUCCESS,
          DELETE_PIE_FAILURE
      } from "../actions/types";

const initialState = {
  pie: {},
  isLoading: false
}

const pieReducer = (state = initialState, action) => {
  switch(action.type) {
    
    case FETCH_PIE_REQUEST:
      return {
        ...state,
        isLoading: true
      }
    case FETCH_PIE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        pie: action.payload
      }
    case FETCH_PIE_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      }
    case UPDATE_PIE_REQUEST:
      return {
        ...state,
        isLoading: true
      }
    case UPDATE_PIE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        pie: action.payload
      }
    case UPDATE_PIE_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      }
    case CREATE_PIE_REQUEST:
      return {
        ...state,
        isLoading: true
      }
    case CREATE_PIE_SUCCESS:
      return {
        ...state,
        pie: action.payload
      }
    case CREATE_PIE_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      }
    case DELETE_PIE_REQUEST:
      return {
        ...state,
        isLoading: true
      }
    case DELETE_PIE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        pie: {}
      }
    case DELETE_PIE_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      }
    default:
      return state
  }
}
export default pieReducer