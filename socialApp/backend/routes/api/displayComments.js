const express = require('express')
const path = require("path")
const router=express.Router()
const {getData}= require("../../data/getDataFromJson")

const commentsFilePath = path.join(__dirname, '../../data/comments.json')

console.log(commentsFilePath)
router.get('/', (req, res) => {
  const includeHateComments = req.query.includeHateComments === 'true';
  console.log(includeHateComments)
  const {hateComments, goodComments} = getData(commentsFilePath)
  const allComments = includeHateComments? [...hateComments, ...goodComments]: [...goodComments]
  const shuffledComments = allComments.sort(() => Math.random() - 0.5);

  res.json({comments:shuffledComments})
})

module.exports = router