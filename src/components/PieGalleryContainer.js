import React from 'react'
import PieGallery from './PieGallery'
import { useSelector } from "react-redux";

export const PieGalleryContainer = () => {

  const pies = useSelector(state => state.authenticationReducer.user.pies)

  return (
    <>
    <h1>My Pies</h1>
    <PieGallery pies={pies} />
    </>
  )
}

export default PieGalleryContainer