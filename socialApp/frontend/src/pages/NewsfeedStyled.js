import styled from "styled-components";

const InputCommentBox = styled.div`
  display: grid;
  grid-template-columns: 3fr 1fr;
  gap: 20px;
  margin-top: 20px;
  justify-content: center;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column; /* Stack input and button on smaller screens */
  }
`

const BodyBox = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr; /* Posts take 2/3, comments 1/3 */
  gap: 20px;
  width: 100%;
  max-width: 1200px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr; /* Single column on smaller screens */
  }
`

const CommentsDisplayBox = styled.div`
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 20px;
`

const MainBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f4f4f9;
  min-height: 100vh;
`
const PostBox = styled.div`
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 20px;
`

export { 
  InputCommentBox, 
  BodyBox, 
  CommentsDisplayBox, 
  MainBox,
  PostBox
}