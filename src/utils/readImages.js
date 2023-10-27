// server/utilities/readImages.js
const fs = require('fs');
const path = require('path');

function readImagesFromFolder(folderPath) {
    const imageFiles = [];
    const files = fs.readdirSync(folderPath);

    for (const file of files) {
        const fileExtension = path.extname(file).toLowerCase();
        if (fileExtension === '.jpeg' || fileExtension === '.jpg') {
            imageFiles.push(file);
        }
    }

    return imageFiles;
}

module.exports = { readImagesFromFolder };
