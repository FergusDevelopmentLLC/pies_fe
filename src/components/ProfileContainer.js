import React from 'react'
import Profile from './Profile'
import { useSelector } from 'react-redux'

export const ProfileContainer = () => {
  
  const user = useSelector(state => state.authenticationReducer.user)

  return (
    <div>
      <Profile user={ user } />
    </div>
  )
}

export default ProfileContainer
