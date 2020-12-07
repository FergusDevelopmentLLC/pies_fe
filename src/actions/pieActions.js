import { CREATE_PIE, FETCH_PIE, UPDATE_PIE } from './types'
import { URL_PREFIX } from './urlPrefix'

export const createPie = (pie, history) => dispatch => {
  
  const options = {
    method: 'POST',
    headers: new Headers({'content-type': 'application/json'}),
    body: JSON.stringify( { pie: pie } )
  }

  fetch(`${ URL_PREFIX }/pies`, options)
    .then(res => res.json())
    .then((pie) => {
      dispatch({
        type: CREATE_PIE,
        payload: pie
      })
      console.log('pie saved')
      //history.push('/participation')
    })
  
}

export const fetchPie = (id) => dispatch => {

  const fakePie = {
    pieceTitles: ['Piece00','Piece01','Piece02','Piece03','Piece04','Piece05','Piece06','Piece07'],
    chunks: [10,20,30,40,50,60,70,11,21,31,41,51,61,71,12,22,32,42,52,62,72,13,23,33,43,53,63,73,14,24,34,44,54,64,74,15,25,35,45,55,65,75,16,26,36,46,56,66,76,17,27,37,47,57,67,77]
  }

  dispatch({
    type: FETCH_PIE,
    payload: fakePie
  })

  
  // fetch(`${ URL_PREFIX }/pies/${id}`, null)
  //   .then(res => res.json())
  //   .then((pie) => {
  //     dispatch({
  //       type: FETCH_PIE,
  //       payload: pie
  //     })
  //     //history.push('/participation')
  //   })
  
}

export const updatePie = (pie, history) => dispatch => {

  const options = {
    method: 'PATCH',
    headers: new Headers({'content-type': 'application/json'}),
    body: JSON.stringify( { pie: pie } )
  }

  let apiUrl = `${ URL_PREFIX }/pies/${pie.id}`
  
  fetch(`${apiUrl}`, options)
    .then(res => res.json())
    .then((savedPie) => {
      
      dispatch({
        type: UPDATE_PIE,
        payload: savedPie
      })

      console.log('pieUpdated')
      // history.push(`/results/${ savedTestResult.economic }/${ savedTestResult.diplomatic }/${ savedTestResult.civil }/${ savedTestResult.societal }`)
    })
}