const fs = require("fs");

function CreatingJSONFiles(dirPath) {
  let Number = Math.floor(Math.random() * 10 + 1);
  for (let index = 0; index < Number; index++) {
    randomFilePath = dirPath + "/file" + index + ".json";
    fs.writeFile(randomFilePath, " ", function (error) {
      if (error) {
        console.log(error);
      }
    });
  }
  deleteFiles(dirPath);
}
function checkDirExists(dirPath) {
  fs.stat(dirPath, (err, stats) => {
    if (err) {
      console.error("Error checking directory:", err);
      return;
    }
    if (stats.isDirectory()) {
      CreatingJSONFiles(dirPath);
    } else {
      fs.mkdir(dirPath, (err) => {
        if (err) {
          console.log(err);
        } else {
          CreatingJSONFiles(dirPath);
        }
      });
    }
  });
}
 function deleteFiles(dirPath){
    fs.readdir(dirPath, (err, files) => {
        if (err) {
          console.error('Error reading directory:', err);
          return;
        }
         else{
          files.forEach(function(file){
            const filePath=dirPath+'/'+file;
            fs.unlink(filePath,(error)=>{
                 if(error){
                    console.log(error);
                 }
                  else{
                    console.log(`${file} deleted successfully`);
                  }
            })
          })
         }
        })
 }
module.exports = checkDirExists;
/*
    Problem 1:
    
    Using callbacks and the fs module's asynchronous functions, do the following:
        1. Create a directory of random JSON files
        2. Delete those files simultaneously 
*/

