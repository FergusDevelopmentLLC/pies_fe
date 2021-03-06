import React from 'react'
import PropTypes from 'prop-types'

const Profile = (props) => {

  const { user } = props
  
  return (
    <>
    <h1>Profile</h1>
    <div>
      First name: { user.first_name }<br/>
      Last name: { user.last_name }<br/>
      Email: { user.email }<br/>
      Number of pies created: { user.pies.length }
    </div>
    </>
  )
}

Profile.propTypes = {
  user: PropTypes.object.isRequired
}

export default Profile

