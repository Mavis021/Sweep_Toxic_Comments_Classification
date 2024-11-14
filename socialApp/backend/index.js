//main api for the backend
const express = require('express')
const bodyParser=require('body-parser')
const cors=require('cors')

//initializing express
const app = express()

//using the bodyparser and cors
app.use(bodyParser.json());
app.use(cors());

//creating the route to api
app.use('/api/display-comments', require('./routes/api/displayComments'))
app.use('/api/classify-comment', require('./routes/api/classifyComment'))

app.get('/', (req, res) => {
  res.send('HI')
})

//port to run the code
const PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log(`Server started on ${PORT}`))