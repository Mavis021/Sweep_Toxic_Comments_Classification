import React from 'react'
import { PostPicture, ProfileInfoBox, ProfilePic } from './PostStyled'
import profilePic from '../../images/profile-pic.png'
import postPic from '../../images/post-image.png'

const PostComponent = () => {
  return (
    <div>
      <ProfileInfoBox>
        <ProfilePic 
          src={profilePic}
          alt="Profile" 
        />
        <p>Username</p>
      </ProfileInfoBox>
      <div>
        <PostPicture
          src={postPic} 
          alt="Post"
        />
      </div>
    </div>
  )
}

export default PostComponent