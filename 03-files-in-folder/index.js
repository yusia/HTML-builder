const fsPr = require("fs/promises");
const path = require("node:path");

const folderPath = "03-files-in-folder/secret-folder";

function getFolderContent(_folderPath) {
  fsPr.readdir(folderPath).then((data) => {
    data.forEach((file) => {
      const filePath = path.resolve(path.join(folderPath, file));
      fsPr.lstat(filePath).then((fileStats) => { 
        if (fileStats.isFile()) {
          var extension = path.extname(file);
          const fileName = path.basename(file, extension);
          console.log(`${fileName} - ${extension.replace(".","")} - ${fileStats.size}`);
        }
      });
    });
  });
}

getFolderContent(folderPath);