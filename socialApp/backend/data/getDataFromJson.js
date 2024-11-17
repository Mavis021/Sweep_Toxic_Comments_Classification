const fs = require('fs')

const getData = (filePath) =>{
  // console.log('path from getdata:',filePath)
  try{
     //reading the file content
    const fileContent = fs.readFileSync(filePath, 'utf8')

    return JSON.parse(fileContent)
  }catch(error){
    console.error('Error reading the json file:', error)
    return { hateComments: [], goodComments: [] }
  }
}

module.exports={getData}