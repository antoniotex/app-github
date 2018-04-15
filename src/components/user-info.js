import React from 'react'
import PropTypes from 'prop-types'

const UserInfo = ({userinfo}) => (
    <div className='user-info'>
            <img src='https://avatars2.githubusercontent.com/u/26071112?v=4' alt='foto'/>
            <h1 className='username'><a href='https://github.com/antoniotex'>{userinfo.username}</a></h1>
            <ul className='repos-info'>
                <li>- Repositórios: {userinfo.repo}</li>
                <li>- Seguidores: {userinfo.seguidores}</li>
                <li>- Segundo: {userinfo.seguindo}</li>
            </ul>
        </div>
)
UserInfo.propTypes = {
    userinfo: PropTypes.shape({
    username: PropTypes.string.isRequired,
    photo: PropTypes.string.isRequired,
    login: PropTypes.string.isRequired,
    repos: PropTypes.number.isRequired,
    followers: PropTypes.number.isRequired,
    following: PropTypes.number.isRequired
    })
  }

export default UserInfo