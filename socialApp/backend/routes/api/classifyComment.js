const express = require('express')
const axios = require('axios')
const path = require('path')
const router = express.Router()
const { generateUniqueId } = require('../../config/randomIdGenerator.js')
const { updateFile } = require('../../data/updateCommentData.js')
const { getData } = require('../../data/getDataFromJson.js')

const commentsFilePath = path.join(__dirname, '../../data/comments.json')

const{hateComments,goodComments}=getData(commentsFilePath)
const allComments = [...goodComments,...hateComments]

router.post('/', async (req, res) => {
  try {
    const { comment } = req.body

    if(!comment) {
      return res.status(400).json({error: 'Comment is required'})
    }

    console.log('Received Comment:', comment)

    //sending comment to the flask server
    const response = await axios.post('http://localhost:5001/classify-comment', { comment })
    console.log('Classification response:', response.data)
    const label = response.data.classification
    console.log('Classification label:', label)

    //Creating the new comment to add to array
    const newComment ={
      commentId: generateUniqueId(allComments),
      comment: comment,
      timeStamp: new Date().toISOString()
    }

    console.log('New comment:', newComment)

    //adding the comment to correct array
    if (label === "No hate or offensive speech"){
      updateFile(newComment, "goodComments")
      // goodComments.push(newComment)
    } else if (label === "Offensive Language Detected" || label === "Hateful"){
      updateFile(newComment, "hateComments")
      // hateComments.push(newComment)
    }

    res.status(200).json({ 
      message: 'Comment classified and added successfully', 
      classification: label,
      newComment 
    });
  } catch (error) {
    console.error('Error:', error)
    res.status(500).json({ error: 'Failed to classify comment' });
  }
})

module.exports = router;