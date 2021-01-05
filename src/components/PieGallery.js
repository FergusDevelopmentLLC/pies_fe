import React from 'react'
import PropTypes from 'prop-types'
import Pie from './Pie'
import { Link } from 'react-router-dom'

const PieGallery = (props) => {
  
  const { pies } = props
  
  return (
    <>
    <div className="pie-gallery">
      {
        pies.map((pie) => {
          
          const bornOnDate = new Date(pie.created_at)
          
          return  <div key={pie.id} className="pie-gallery-container">
                    <Pie pieData={ pie } />
                    <div>{ bornOnDate.getMonth() + 1}-{bornOnDate.getDate()}-{bornOnDate.getFullYear()}</div>
                    <div><Link to={`/pies/${pie.id}`}>Update</Link></div>
                  </div>
        })
      }
    </div>
    </>
  )
}

PieGallery.propTypes = {
  pies: PropTypes.array
}

export default PieGallery