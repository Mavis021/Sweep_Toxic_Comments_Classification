import * as apiCall from '../api/api.client'

const url = "http://localhost:5000"

export const postCommenApi = async (path, body) => {
  const response = await apiCall.post(url+path, body)
  console.log(response.data)
  return response.data
}

export const displayComments = async (path) => {
  const response = await apiCall.get(url+path)
  console.log(response.data)
  return response.data
}
