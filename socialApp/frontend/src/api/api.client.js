import axios from 'axios'

const post = async (url, body) => {
  const headers = {
    'Content-Type': 'application/json',
  }

  try{
    const response = await axios.post(url, body, {headers})
    console.log('main post:', response)
    return response
  } catch(error) {
    console.log('Error in loading the server', error.message)
  }
}

const get = async (url) => {
  try{
    const response = await axios.get(url)
    return response
  } catch(error) {
    console.log('Error fetching the data', error)
  }
}

export {
  post,
  get,
}