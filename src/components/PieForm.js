import React, { useState } from "react"
import { createPie } from '../actions/pieActions'
import { useSelector, useDispatch } from 'react-redux'

export const PieForm = (props) => {

  const user = useSelector(state => state.authenticationReducer.user)
  const dispatch = useDispatch()

  const [pie, setPie] = useState({
    title: '',
    pieces: ['Goal 1', 'Goal 2', 'Goal 3', 'Goal 4', 'Goal 5', 'Goal 6', 'Goal 7', 'Goal 8']
  })

  const setTitle = (event) => {
    setPie({
      ...pie,
      title: event.target.value
    })
  }

  const setPiece = (event) => {
    const p = [...pie.pieces]
    p[event.target.id] = event.target.value
    setPie({
      ...pie,
      pieces: p
    })
  }

  //TODO: where to put this?
  String.prototype.isEmpty = function() {
    return (this.length === 0 || !this.trim())
  }

  const savePie = (event) => {
    event.preventDefault()
    if(pie.title.isEmpty() || pie.pieces[0].isEmpty() || pie.pieces[1].isEmpty() || pie.pieces[2].isEmpty() || pie.pieces[3].isEmpty() || pie.pieces[4].isEmpty() || pie.pieces[5].isEmpty() || pie.pieces[6].isEmpty() || pie.pieces[7].isEmpty()) {
      alert('All fields are required')
    }
    else {
      pie.user_id = user.id
      dispatch(createPie(pie))
      props.history.push('/pies')
    }
  }

  return (
    <div>
      <h1>New Pie</h1>
      <form className='form'>
        <label htmlFor='title'>Title</label>
        <input type='text' name='title' value={ pie.title } onChange={ setTitle } />

        <label htmlFor='piece00'>Piece</label>
        <input type='text' name='piece00' id={0} defaultValue={ pie.pieces[0] } onChange={ setPiece } />

        <label htmlFor='piece01'>Piece</label>
        <input type='text' name='piece01' id={1} defaultValue={ pie.pieces[1] } onChange={ setPiece }/>

        <label htmlFor='piece02'>Piece</label>
        <input type='text' name='piece02' id={2} defaultValue={ pie.pieces[2] } onChange={ setPiece }/>

        <label htmlFor='piece03'>Piece</label>
        <input type='text' name='piece03' id={3} defaultValue={ pie.pieces[3] } onChange={ setPiece }/>

        <label htmlFor='piece04'>Piece</label>
        <input type='text' name='piece04' id={4} defaultValue={ pie.pieces[4] } onChange={ setPiece }/>

        <label htmlFor='piece05'>Piece</label>
        <input type='text' name='piece05' id={5} defaultValue={ pie.pieces[5] } onChange={ setPiece }/>
        
        <label htmlFor='piece06'>Piece</label>
        <input type='text' name='piece06' id={6} defaultValue={ pie.pieces[6] } onChange={ setPiece }/>

        <label htmlFor='piece07'>Piece</label>
        <input type='text' name='piece07' id={7} defaultValue={ pie.pieces[7] } onChange={ setPiece }/>

        <input type='submit' value="Save" onClick={ savePie } />
      </form>
    </div>
  )
}

export default PieForm
