const express = require('express')
const { hateComments, goodComments } = require('../../data/comments')
const router=express.Router()

router.get('/', (req, res) => {
  res.json({hateComments, goodComments})
})

module.exports = router