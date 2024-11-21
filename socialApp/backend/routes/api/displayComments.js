const express = require('express')
const path = require("path")
const router = express.Router()
const { getData } = require("../../data/getDataFromJson")
const { updateFile } = require('../../data/updateCommentData')

const commentsFilePath = path.join(__dirname, '../../data/comments.json')

console.log(commentsFilePath)
router.get('/', (req, res) => {
  const includeHateComments = req.query.includeHateComments === 'true';
  console.log(includeHateComments)
  const { goodComments, freshComments } = getData(commentsFilePath)

  if(!includeHateComments) {
    updateFile(null, null, !includeHateComments)
  }
  const allComments = includeHateComments ? [...freshComments, ...goodComments] : [...goodComments]
  const shuffledComments = allComments.sort(() => Math.random() - 0.5);

  res.json({comments:shuffledComments})
})

module.exports = router