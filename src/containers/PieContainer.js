import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import Pie from '../components/Pie'
import { connect } from 'react-redux'
import { fetchPie } from '../actions/pieActions'

const PieContainer = ({
  id=0,
  fetchPie,
  pie
}) => {

  useEffect(() => {
    fetchPie(id)
  }, [id, fetchPie])

  return (
    <Pie pieceTitles={ pie.pieceTitles } chunks={ pie.chunks }/>
  )
}

PieContainer.propTypes = {
  id: PropTypes.number.isRequired
}

const mapStateToProps = (state) => {
  return {
    fetchPie: PropTypes.func.isRequired,
    pie: state.pieReducer.pie
  }
}

export default connect(mapStateToProps, { fetchPie })(PieContainer)

