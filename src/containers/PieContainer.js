import React from 'react'
import PropTypes from 'prop-types'
import Pie from '../components/Pie'

function PieContainer(props) {
  return (
    <Pie/>
  )
}

PieContainer.propTypes = {
  id: PropTypes.number.isRequired
}

export default PieContainer

