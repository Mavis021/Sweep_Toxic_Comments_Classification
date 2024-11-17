import React, { useState, useEffect } from 'react'
import Button from '../components/Button/Button';
import CommentsDisplay from '../components/CommentsDisplay';
import InputComment from '../components/InputComment/InputComment';
import  { postCommenApi,displayComments } from './NewsfeedApi';
import { BodyBox, CommentsDisplayBox, InputCommentBox } from './NewsfeedStyled';
import PostComponent from '../components/PostComponent/PostComponent';
import Header from '../components/Header/Header';
// import usePostData from '../hooks/useMutation';

const NewsfeedPage = () => {
  const[inputComment, setInputComment] = useState('');
  const[fetchedComments, setFetchedComments] = useState([])
  const[includeHateComments, setIncludeHateComments] = useState (true)

  console.log("HI")
  // const mutation = usePostData()
  // console.log(mutation);

  // if(!mutation){
  //   console.log("Muattion not working")
  // }


  const handleChange=(changedData)=>{
    setInputComment(changedData)
    console.log('Changed data',inputComment)
  }

  // const handleSubmitClick=()=>{
  //   const path=`${baseUrl}/api/classify-comment`
  //   mutation.mutate({
  //     url: path,
  //     body:{comment}
  //   })
  //   setComment('')
  // }

  const handleSubmitClick = async () => {
    const response = await postCommenApi('/api/classify-comment', {comment : inputComment})
    console.log('after the comment is submitted:', response)

    if(response.status === 200){
      console.log('hello from submit')
      setInputComment('')
      handleDisplayComments()
    }
  }

  const handleDisplayComments = async () => {
    const data = await displayComments(`/api/display-comments?includeHateComments=${includeHateComments}`)
    console.log('Display bata',typeof(data.comments))
    console.log(includeHateComments)
    setFetchedComments(data.comments)
  }

  const handleDeleteClick = async () => {
    setIncludeHateComments(false)
  }

  //fetch comments when the component loads
  useEffect(() => {
    handleDisplayComments();
  }, [includeHateComments])

  return (
    <div>
      <Header />
      <BodyBox>
        <div>
          <PostComponent />
          <InputCommentBox >
            <InputComment 
              value={inputComment}
              onChange={(changedData) => {handleChange(changedData)}}
            />
            <Button 
              title={"Submit"} onClick={handleSubmitClick}
            />
          </InputCommentBox>
        </div>

        <CommentsDisplayBox>
          <CommentsDisplay comments={fetchedComments}/>
          <Button 
            title={"Delete"} onClick={handleDeleteClick}
          />
        </CommentsDisplayBox>
      </BodyBox>
    </div>
  )
}

export default NewsfeedPage