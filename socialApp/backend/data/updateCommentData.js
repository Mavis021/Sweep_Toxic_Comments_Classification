const fs = require("fs")
const path = require ("path")
const { getData } = require("./getDataFromJson")

const filepath = path.join(__dirname,"comments.json")
console.log("path of file:", filepath)

const updateFile = async (newComment, type) =>{
  try{
    const { hateComments, goodComments} = getData(filepath)
    //reading the file content
    let fileContent = fs.readFileSync(filepath, "utf8")
    console.log('content read:',fileContent)

    //extracting the data 
    let data = {};
    // eval(fileContent);
    // Manually assign the values to data object
    data.hateComments = hateComments;
    data.goodComments = goodComments;
    console.log("data read:", data)
    console.log(data.hateComments)

    //updating the data
    if(type === "goodComments"){
      data.goodComments.push(newComment)
    } else if (type === "hateComments"){
      data.hateComments.push(newComment)
    } else {
      console.error("Invalid type specified")
      return
    }

    //create the updated file content
    const updatedContent = JSON.stringify(data, null, 2);

    //writing the updated content
    fs.writeFileSync(filepath,updatedContent,"utf8")
    console.log("File updated successfully")
  } catch (error) {
    console.error("Error updating the file",error)
  }
}

module.exports={updateFile}