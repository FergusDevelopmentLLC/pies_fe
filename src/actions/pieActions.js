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
} from './types'

import { URL_PREFIX } from './urlPrefix'
import { refreshUser } from '../actions/userActions'

export const createPie = (pie, user, history) => {

  pie.user_id = user.id

  return dispatch => {

    dispatch({ type: CREATE_PIE_REQUEST })

    const options = {
      method: 'POST',
      headers: new Headers({'content-type': 'application/json'}),
      body: JSON.stringify( { pie: pie } )
    }

    fetch(`${ URL_PREFIX }/pies`, options)
      .then(res => {
        if(res.ok) return res.json()
        else return Promise.reject(res.statusText)
      })
      .then((pie) => {
        return dispatch({
          type: CREATE_PIE_SUCCESS,
          payload: pie
        })
      })
      .then(() => {
        return dispatch(refreshUser(user, history))//https://github.com/reduxjs/redux/issues/1738
      })
      .catch((error) => {
        return dispatch({
          type: CREATE_PIE_FAILURE,
          payload: error
        })
      })
  }
}

export const fetchPie = (id) => {

  return dispatch => {

    dispatch({ type: FETCH_PIE_REQUEST })

    fetch(`${ URL_PREFIX }/pies/${id}`, null)
      .then(res => {
        if(res.ok) return res.json()
        else return Promise.reject(res.statusText)
      })
      .then((pie) => {
        return dispatch({
          type: FETCH_PIE_SUCCESS,
          payload: pie
        })
      })
      .catch((error) => {
        return dispatch({
          type: FETCH_PIE_FAILURE,
          payload: error
        })
      })
  }
}

  
export const updatePie = (pie, user) => {
  
  return dispatch => {
    
    dispatch({ type: UPDATE_PIE_REQUEST })

    const options = {
      method: 'PATCH',
      headers: new Headers({'content-type': 'application/json'}),
      body: JSON.stringify( { pie: pie } )
    }

    fetch(`${ URL_PREFIX }/pies/${pie.id}`, options)
      .then(res => {
        if(res.ok) return res.json()
        else return Promise.reject(res.statusText)
      })
      .then((pie) => {
        return dispatch({
          type: UPDATE_PIE_SUCCESS,
          payload: pie
        })
      })
      .then(() => {
        dispatch(refreshUser(user))//https://github.com/reduxjs/redux/issues/1738
      })
      .catch((error) => {
        return dispatch({
          type: UPDATE_PIE_FAILURE,
          payload: error
        })
      })
  }
}

export const deletePie = (pie, user, history) => {

  return dispatch => {

    dispatch({ type: DELETE_PIE_REQUEST })
  
    const options = {
      method: 'DELETE',
      headers: new Headers({'content-type': 'application/json'})
    }

    fetch(`${ URL_PREFIX }/pies/${pie.id}`, options)
      .then(res => {
        if(!res.ok) return Promise.reject(res.statusText)
      })
      .then(() => {
        return dispatch({ type: DELETE_PIE_SUCCESS })
      })
      .then(() => {
        return dispatch(refreshUser(user, history))//https://github.com/reduxjs/redux/issues/1738
      })
      .catch((error) => {
        return dispatch({
          type: DELETE_PIE_FAILURE,
          payload: error
        })
      })
  }

}