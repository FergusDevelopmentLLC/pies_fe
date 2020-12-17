import React, { Component } from 'react'
import { connect } from 'react-redux'
import { refreshUser } from '../actions/userActions'
import PieGallery from './PieGallery'

export class PieGalleryContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      user: this.props.user,
      pies: this.props.pies
    }
  }

  componentDidMount() {
    this.props.refreshUser(this.props.user)
  }

  render() {
    return (
      <>
        <h1>My Pies</h1>
        {this.props.pies.length > 0 ? null : 'No pies yet. Click New Pie to create a pie.'}
        <PieGallery pies={this.props.pies} />
      </>
    )
  }
}

const mapStateToProps = (state) => ({
  user: state.authenticationReducer.user ? state.authenticationReducer.user : {},
  pies: state.authenticationReducer.user && state.authenticationReducer.user.pies ? state.authenticationReducer.user.pies : []
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