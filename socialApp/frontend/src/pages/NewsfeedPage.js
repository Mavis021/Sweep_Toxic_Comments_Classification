//this is the main page that displays the post
import React, { useState, useEffect } from 'react'
import Button from '../components/Button/Button';
import CommentsDisplay from '../components/CommentDisplay/CommentsDisplay';
import InputComment from '../components/InputComment/InputComment';
import  { postCommenApi,displayComments } from './NewsfeedApi';
import { BodyBox, CommentsDisplayBox, InputCommentBox, MainBox, PostBox } from './NewsfeedStyled';
import PostComponent from '../components/PostComponent/PostComponent';
import Header from '../components/Header/Header';

const NewsfeedPage = () => {
  const[inputComment, setInputComment] = useState('');
  const[fetchedComments, setFetchedComments] = useState([])
  const[includeHateComments, setIncludeHateComments] = useState (true)

  const handleChange = (changedData) => {
    setInputComment(changedData)
    console.log('Changed data', inputComment)
  }

  const handlePostClick = async () => {
    const response = await postCommenApi('/api/classify-comment', { comment : inputComment })
    console.log('after the comment is submitted:', response)

    if(response.status === 200){
      console.log('hello from submit')
      setInputComment('')
      handleDisplayComments()
    }
  }

  const handleDisplayComments = async () => {
    const data = await displayComments(`/api/display-comments?includeHateComments=${includeHateComments}`)
    console.log('Display bata', typeof(data.comments))
    console.log(includeHateComments)
    setFetchedComments(data.comments)
    if(!includeHateComments){
      setIncludeHateComments(true)
    }
  }

  const handleFilterClick = async () => {
    setIncludeHateComments(false)
  }

  const handleKeyDown = (event) => {
    if(event.key === 'Enter'){
      console.log(event.key)
      handlePostClick()
    }
  }

  //fetch comments when the component loads
  useEffect(() => {
    handleDisplayComments();
  }, [includeHateComments])

  return (
    <MainBox>
      <Header />
      <BodyBox>
        <PostBox>
          <PostComponent />
          <InputCommentBox >
            <InputComment 
              value={inputComment}
              onChange={(changedData) => {handleChange(changedData)}}
              onKeyDown={handleKeyDown}
            />
            <Button 
              title={"Post"} onClick={handlePostClick}
            />
          </InputCommentBox>
        </PostBox>

        <CommentsDisplayBox>
          <CommentsDisplay comments={fetchedComments}/>
          <Button 
            title={"Filter"} onClick={handleFilterClick}
          />
        </CommentsDisplayBox>
      </BodyBox>
    </MainBox>
  )
}

export default NewsfeedPage