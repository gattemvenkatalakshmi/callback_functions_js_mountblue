const fs = require("fs");

function makeDir(dirPath, callback) {
  fs.mkdir(dirPath, (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log(dirPath);
      callback(dirPath);
    }
  });
}
function cbRemoveDir(dirPath) {
  fs.rmdir(dirPath, (err) => {
    if (err) {
      console.log(error);
    } else {
      console.log(`deleted ${dirPath}`);
    }
  });
}
function callMakeAndDeletedir(dirPath){
   makeDir(dirPath,cbRemoveDir);
}

module.exports = callMakeAndDeletedir;
/* Create  a directory  and delete it */
