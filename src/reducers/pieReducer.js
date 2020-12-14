import {  CREATE_PIE,
          FETCH_PIE, 
          UPDATE_PIE, 
          DELETE_PIE_REQUEST,
          DELETE_PIE_SUCCESS,
          DELETE_PIE_FAILURE
        } from "../actions/types";

const initialState = {
  pie: {},
  isLoading: false
}

export default (state = initialState, action) => {
  switch(action.type) {
    case FETCH_PIE:
      return {
        ...state,
        pie: action.payload
      }
    case UPDATE_PIE:
      return {
        ...state,
        pie: action.payload
      }
    case CREATE_PIE:
      return {
        ...state,
        pie: action.payload
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