import React, { Component } from 'react'
import { connect } from 'react-redux'
import { refreshUser } from '../actions/userActions'
import PieGallery from './PieGallery'

export class PieGalleryContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      user: this.props.user
    }
  }

  getPies() {
    if(this.state.user && this.state.user.pies && this.state.user.pies.length > 0) {
      const sorted = this.state.user.pies.map(pie => pie).sort((a, b) => (a.created_at > b.created_at) ? 1 : -1)
      return <PieGallery pies={ sorted } />
    }
    else return null
  }

  render() {
    return (
      <>
        <h1>My Pies</h1>
        { (this.state.user && this.state.user.pies && this.state.user.pies.length > 0) ? null : 'No pies yet. Click New Pie to create a pie.'}
        { this.getPies() }
      </>
    )
  }
}

const mapStateToProps = (state) => ({
  user: state.authenticationReducer.user,
  isLoading: state.authenticationReducer.isLoading
})

export default connect(mapStateToProps, { refreshUser })(PieGalleryContainer)


// function component version
// React Hook useEffect has a missing dependency: 'user'. Either include it or remove the dependency array

// import React, { useEffect } from 'react'
// import PieGallery from './PieGallery'
// import { useSelector, useDispatch } from "react-redux"
// import { refreshUser } from '../actions/userActions'

// export const PieGalleryContainer = () => {

//   const dispatch = useDispatch()
//   const pies = useSelector(state => state.authenticationReducer.user.pies)
//   const user = useSelector(state => state.authenticationReducer.user)

//   useEffect(() => {
//     dispatch(refreshUser(user))
//   }, [dispatch])

//   return (
//     <>
//     <h1>My Pies</h1>
//     { pies.length > 0 ? null : 'No pies yet. Click New Pie to create a pie.'}
//     <PieGallery pies={pies} />
//     </>
//   )
// }

// // https://reacttraining.com/blog/when-to-use-functions-in-hooks-dependency-array/
// // https://github.com/facebook/react/issues/15865
// export default PieGalleryContainer