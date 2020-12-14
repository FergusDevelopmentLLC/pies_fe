import React, { useEffect } from 'react'
import PieGallery from './PieGallery'
import { useSelector, useDispatch } from "react-redux"
import { refreshUser } from '../actions/userActions'


export const PieGalleryContainer = () => {

  const user = useSelector(state => state.authenticationReducer.user)
  const pies = useSelector(state => state.authenticationReducer.user.pies)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(refreshUser(user))
  }, [])

  return (
    <>
    <h1>My Pies</h1>
    { pies.length > 0 ? null : 'No pies yet. Click New Pie to create a pie.'}
    <PieGallery pies={pies} />
    </>
  )
}

export default PieGalleryContainer