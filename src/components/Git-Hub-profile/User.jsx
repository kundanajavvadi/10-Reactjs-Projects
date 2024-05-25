
import React from 'react'

function User({user}) {
    const {login,avatar_url,followers
,following,public_repos
}=user;
  return (
    <div className='user'>
        <div>
        <img src={avatar_url} className='avatar' alt="User" />
      </div>
      <div className='name-container' >
            <h3>Name:{login}</h3>
        </div>
        <div className='profile-info'>
        <div>
            <h3>Followers:{followers}</h3>
        </div>
        <div>
            <h3>Following:{following}</h3>
        </div>
        <div>
            <h3>Public Repositories:{public_repos}</h3>
        </div>
        </div>
    </div>
  )
}

export default User