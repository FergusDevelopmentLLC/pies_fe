import React from 'react'
import { updatePie } from '../actions/pieActions'
import { useSelector, useDispatch } from 'react-redux'

const PieControls = (props) => {
  
  const pieData = props.pieData

  const dispatch = useDispatch()

  const currentUser = useSelector(state => state.authenticationReducer.user)
  
  const addChunk = (index) => {
    const piece = [parseInt(1 + index.toString()), parseInt(2 + index.toString()), parseInt(3 + index.toString()), parseInt(4 + index.toString()), parseInt(5 + index.toString()), parseInt(6 + index.toString()), parseInt(7 + index.toString())]
    for (let chunk of piece) {
      if(!pieData.chunks.includes(chunk)) {
        
        dispatch(updatePie({
          ...pieData,
          chunks: [...pieData.chunks, chunk]
        }, currentUser))
        
        break
      }
    }
  }

  const removeChunk = (index) => {
    const piece = [parseInt(7 + index.toString()), parseInt(6 + index.toString()), parseInt(5 + index.toString()), parseInt(4 + index.toString()), parseInt(3 + index.toString()), parseInt(2 + index.toString()), parseInt(1 + index.toString())]
    for (let chunk of piece) {
      if(pieData.chunks.includes(chunk)) {
        dispatch(updatePie({
          ...pieData,
          chunks: pieData.chunks.filter((c) => c !== chunk)
        }, currentUser))

        break
      }
    }
  }

  const getButtons = () => {
    if(pieData.pieces) {
      return pieData.pieces.map((piece, index) => {
        return  <div key={index} className='pie-controls-container'>
                  <h4>{ piece }</h4>
                  <div className="chunk-wrapper"><button onClick={() => addChunk(index) }>Add chunk</button> <button onClick={() => removeChunk(index) }>Remove chunk</button></div>
                </div>
      })
    }
  }

  return getButtons()
}

export default PieControls