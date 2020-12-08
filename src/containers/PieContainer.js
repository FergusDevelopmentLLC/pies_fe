import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import Pie from '../components/Pie'
import { connect } from 'react-redux'
import { fetchPie } from '../actions/pieActions'
import { updatePie } from '../actions/pieActions'

const PieContainer = ({
  id=0,
  fetchPie,
  updatePie,
  pie
}) => {

  useEffect(() => {
    fetchPie(id)
  }, [id, fetchPie, updatePie])

  return (
    <div>
      <Pie pieces={ pie.pieces } chunks={ pie.chunks } title={ pie.title } />
      <div>
        <button onClick={()=> {
          updatePie({
            id: id,
            title: 'Success Pie',
            pieces: ['Piece00', 'Piece01', 'Piece02', 'Piece03', 'Piece04', 'Piece05', 'Piece06', 'Piece07'],
            chunks: [10, 11, 12]
          })
        }}>Update</button>
      </div>
    </div>
  )
}

PieContainer.propTypes = {
  id: PropTypes.number.isRequired
}

const mapStateToProps = (state) => {
  return {
    fetchPie: PropTypes.func.isRequired,
    updatePie: PropTypes.func.isRequired,
    pie: state.pieReducer.pie
  }
}

export default connect(mapStateToProps, { fetchPie, updatePie })(PieContainer)

