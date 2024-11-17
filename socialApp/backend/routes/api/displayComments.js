const express = require('express')
const { hateComments, goodComments } = require('../../data/comments')
const router=express.Router()

router.get('/', (req, res) => {
  const allComments =[...hateComments,...goodComments]
  const shuffledComments = allComments.sort(() => Math.random() - 0.5);
  res.json({comments:shuffledComments})
})

module.exports = router