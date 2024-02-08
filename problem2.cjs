const fs = require("fs");

// , callback2
function mainFunction(filePath, filesStorePath ) {
  fs.readFile(filePath, "utf8", function (error, data) {
    if (error) {
      console.log(error);
    } else {
      //console.log(data);
      UpperContent(data, filesStorePath)
    }
  });
}
function UpperContent(data, filesStorePath) {
  const Upperdata = data.toUpperCase();
  const UpperfilePath = "./Upper.txt";
  fs.writeFile(UpperfilePath, Upperdata, function (err) {
    if (err) throw err;
    else {
        fs.writeFile(filesStorePath, UpperfilePath+'\n', function (error) {
            if (error) {
              console.log(error);
            }
             else{
               fs.readFile(UpperfilePath,"utf8",(error, data)=>{
                if (error) {
                    console.log(error);
                  } else {
                    //console.log(data);
                     lowerFile(data, filesStorePath);
                  }
               })
             }
          });
    }
  });
}
 function lowerFile(data,filesStorePath){
   const lowerFilePath ='./Lower.txt';
    const lowerData = data.toLowerCase();
    const sentences = lowerData.split(/[.!?]/);
     const convertedData = sentences.join('\n')
    fs.writeFile(lowerFilePath, convertedData, function (err) {
      if (err) throw err;
      else {
              
                 fs.appendFile(filesStorePath,lowerFilePath+'\n',(error, data)=>{
                  if (error) {
                      console.log(error);
                    } else {
                      //console.log(data);
                      fs.readFile(lowerFilePath,"utf8",(error, data)=>{
                        if (error) {
                            console.log(error);
                          } else {
                            //console.log(data);
                            sortedFile (data, filesStorePath);
                          }
                       })
                    }
                 });
               }
            });
      }
  
    



  function sortedFile(data, filesStorePath){
    const sortedFile = './SortedFile.txt';
    const sortedContent = data.split('\n').sort().join('\n');
    fs.writeFile(sortedFile, sortedContent, function (err) {
      if (err) throw err;
      else {
              
                 fs.appendFile(filesStorePath,sortedFile+'\n',(error, data)=>{
                  if (error) {
                      console.log(error);
                    } else {
                      //console.log(data);
                      fs.readFile(filesStorePath,"utf8",(error, data)=>{
                        if (error) {
                            console.log(error);
                          } else {
                            //console.log(data);
                             const filesNames=data.split('\n');
                            deleteFiles (filesNames);
                          }
                       })
                    }
                 });
               }
            });

     
  }
   function deleteFiles(filesNames){
    filesNames.forEach((filename) => {
      if (filename) {
          fs.unlink(filename.trim(), (err) => {
              if (err) {
                  console.error('Error deleting file:', err);
                  return;
              }
              console.log('File deleted:', filename.trim());
          });
      }
  });
    
   }
    module.exports= mainFunction;
/*
    Problem 2:
    
    Using callbacks and the fs module's asynchronous functions, do the following:
        1. Read the given file lipsum.txt
        2. Convert the content to uppercase & write to a new file. Store the name of the new file in filenames.txt
        3. Read the new file and convert it to lower case. Then split the contents into sentences. Then write it to a new file. Store the name of the new file in filenames.txt
        4. Read the new files, sort the content, write it out to a new file. Store the name of the new file in filenames.txt
        5. Read the contents of filenames.txt and delete all the new files that are mentioned in that list simultaneously.
*/
