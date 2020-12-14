import { 
  CREATE_PIE,
  FETCH_PIE,
  UPDATE_PIE,
  DELETE_PIE_REQUEST,
  DELETE_PIE_SUCCESS,
  DELETE_PIE_FAILURE
} from './types'

import { URL_PREFIX } from './urlPrefix'
import { refreshUser } from '../actions/userActions'

export const createPie = (pie, user, history) => {
  
  return dispatch => {

    //dispatch({ type: CREATE_PIE_REQUEST })

    const options = {
      method: 'POST',
      headers: new Headers({'content-type': 'application/json'}),
      body: JSON.stringify( { pie: pie } )
    }
  
    fetch(`${ URL_PREFIX }/pies`, options)
      .then(res => res.json())
      .then((pie) => {
        return dispatch({
          type: CREATE_PIE,
          payload: pie
        })
      }).then(() => {
        return dispatch(refreshUser(user))
      }).then(() => {
        history.push('/pies')
      })
  }
  
}

export const fetchPie = (id) => {

  return dispatch => {
    const apiUrl = `${ URL_PREFIX }/pies/${id}`

    fetch(apiUrl, null)
      .then(res => res.json())
      .then((pie) => {
        return dispatch({
          type: FETCH_PIE,
          payload: pie
        })
      })
  }
}

export const updatePie = (pie, user) => {

  return dispatch => {
    const options = {
      method: 'PATCH',
      headers: new Headers({'content-type': 'application/json'}),
      body: JSON.stringify( { pie: pie } )
    }
  
    let apiUrl = `${ URL_PREFIX }/pies/${pie.id}`
    
    fetch(`${apiUrl}`, options)
      .then(res => res.json())
      .then((savedPie) => {
        return dispatch({
          type: UPDATE_PIE,
          payload: savedPie
        })
      }).then(() => {
        return dispatch(refreshUser(user))
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
      }).then(() => {
        return dispatch(refreshUser(user))
      }).then(() => {
        history.push('/pies')
      }).catch((error) => {
        return dispatch({
          type: DELETE_PIE_FAILURE,
          payload: error
        })
      })
  }
  
  
}