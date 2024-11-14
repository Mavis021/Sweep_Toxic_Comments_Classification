const express = require('express')
const axios = require('axios')
const router = express.Router()

router.post('/', async (req, res) => {
  try{
    const { comment } = req.body
    console.log(comment)

    //sending comment to the flask server
    const response = await axios.post('http://localhost:5001/classify-comment', { comment })

    res.json(response.data)
  } catch(error) {
    console.error(error)
    res.status(500).json({ error: 'Failed to classify comment' });
  }
})

module.exports = router