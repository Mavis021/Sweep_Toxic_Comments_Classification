import React from 'react'
import { TimestampDisplay } from '../../config/dateFormat'
import { CommentDiv } from './CommentDisplayStyled'

const CommentsDisplay = ({comments}) => {
  return (
    <div>
      <h1>Comments</h1>
      {console.log('from display',comments)}
      <div>
        {comments.map((comment) => (
          <CommentDiv key={comment.commentId}>
            <p>
              {comment.comment}
            </p>
            <p>
              {TimestampDisplay(comment.timeStamp)}
            </p>
          </CommentDiv>
        ))}
      </div>
    </div>
  )
}

export default CommentsDisplay