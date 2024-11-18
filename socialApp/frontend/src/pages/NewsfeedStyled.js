import styled from "styled-components";

const InputCommentBox = styled.div`
  display: flex;
`

const BodyBox = styled.div`
  display: flex;
  justify-content: space-around;
`

const CommentsDisplayBox = styled.div`
  display:flex;
  border: black solid 2px;
  text-decoration: none;
`

const MainBox = styled.div`
  border: black solid 2px;
`
const PostBox = styled.div`
  margin-right: 50px;
`

export { 
  InputCommentBox, 
  BodyBox, 
  CommentsDisplayBox, 
  MainBox,
  PostBox
}