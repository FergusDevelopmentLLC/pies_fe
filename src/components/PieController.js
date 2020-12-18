import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import Pie from './Pie'
import PieControls from './PieControls'
import { fetchPie } from '../actions/pieActions'
import { deletePie } from '../actions/pieActions'
import { useSelector, useDispatch} from 'react-redux'

const PieController = (props) => {

  const dispatch = useDispatch()
  const pie = useSelector(state => state.pieReducer.pie)
  const currentUser = useSelector(state => state.authenticationReducer.user)
  
  const getPieComponent = () => Object.keys(pie).length > 0 ? <Pie pieData={ pie } /> : null
  const getPieControls = () => Object.keys(pie).length > 0 ? <PieControls pieData={ pie } /> : null

  useEffect(() => {
    dispatch(fetchPie(props.id))
  }, [dispatch, props.id])
  
  return (
    <div className='pie-container'>
      { getPieComponent() }
      { getPieControls() }
      <div className="delete-pie-wrapper"><button onClick={ () => {
        dispatch(deletePie(pie, currentUser, props.history))
      } }>Delete Pie</button></div>
      
    </div>
  )
}

PieController.propTypes = {
  id: PropTypes.number.isRequired
}

export default PieController