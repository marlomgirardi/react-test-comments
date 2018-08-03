import React from 'react'

const Profile = props => {
  const { photoURL, email, displayName } = props.user
  return (
    <div className="profile mt-4">
      <img
        src={photoURL}
        alt={displayName}
        style={{ width: '50px', marginRight: '10px' }}
        className="rounded-circle"
      />
      {displayName} ({email})
      <button
        className="btn btn-secondary ml-2"
        onClick={() => props.onSignOut()}
      >
        Sign out
      </button>
    </div>
  )
}

export default Profile
