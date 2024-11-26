//Function to generate random id for new comments
const generateRandomId = (length = 3) => {
  const characters = '0123456789'
  let randomId = ''

  for (let i=0; i<length; i++) {
    randomId += characters.charAt(Math.floor(Math.random() * characters.length))
  }

  return randomId
}

const generateUniqueId = (commentsArray) => {
  let newId;
  let idExists;

  do {
    newId = generateRandomId()
    idExists = commentsArray.some(comment => comment.commentId === newId)
  } while (idExists)

  return newId;
}

module.exports = {generateUniqueId}