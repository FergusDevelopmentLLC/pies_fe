import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import Pie from './Pie'
import PieControls from './PieControls'
import { fetchPie } from '../actions/pieActions'
import { deletePie } from '../actions/pieActions'
import { useSelector, useDispatch} from 'react-redux'
import { Link } from 'react-router-dom'
import { useHistory } from "react-router"

const PieController = ({
  id = 0
}) => {

  const pie = useSelector(state => state.pieReducer.pie)
  const user = useSelector(state => state.authenticationReducer.user)
  const dispatch = useDispatch()
  const history = useHistory()
  
  const getPie = () => Object.keys(pie).length > 0 ? <Pie pieData={ pie } /> : null
  const getPieControls = () => Object.keys(pie).length > 0 ? <PieControls pieData={ pie } /> : null

  useEffect(() => {
    dispatch(fetchPie(id))
  }, [])
  
  return (
    <div className='pie-container'>
      { getPie() }
      { getPieControls() }
      <div className="delete-pie-wrapper"><button onClick={ () => {
        dispatch(deletePie(pie, user, history))
      } }>Delete Pie</button></div>
      
    </div>
  )
}

PieController.propTypes = {
  id: PropTypes.number.isRequired
}

export default PieController