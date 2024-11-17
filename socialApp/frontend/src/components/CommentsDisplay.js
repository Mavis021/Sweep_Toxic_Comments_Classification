import React from 'react'

const CommentsDisplay = ({comments}) => {
  return (
    <div>
      <h1>Comments</h1>
      {console.log('from display',comments)}
      <ul>
        {comments.map((comment) => (
          <li key={comment.commentId}>
            {comment.comment}
          </li>
        ))}
      </ul>
      {/* <div>
        <p>Comment</p>
        <p>Date</p>
      </div> */}
    </div>
  )
}

export default CommentsDisplay