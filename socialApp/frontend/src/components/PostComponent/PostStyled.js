import styled from "styled-components";

const ProfilePic = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 10px;
`

const ProfileInfoBox = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  background-color: #F5F5DC;
  border-bottom: 1px solid #eee;
  border-radius: 15px 15px 0 0;
`

const PostPicture = styled.img`
    width: 100%;
  display: block;
`

export {ProfilePic,ProfileInfoBox,PostPicture}