const { findImagePath } = require('../services/Media');
const { getFileExtension, isAllowedFileExtension } = require('../helpers');

const getImageFile = (req, res, next) => {
  // get the filename from the request parameters
  const { filename } = req.params;
    
  // check if the image file extension is not an allowed one
  if (!isAllowedFileExtension(filename)) {
    const ext = getFileExtension(filename);
    res.status(400).json({error: `File extension .${ext} is not supported`});
    return;
  }

  // try get the image path and send the file
  try {
    const imagePath = findImagePath(filename);
    res.sendFile(imagePath);
  } catch(e) {
    // if we ever have a 500 server error log the error to the console and send an error
    console.log(e.message);
    res.status(500).json({error: 'Could not get image file'});
  }
}

module.exports = {
  getImageFile
};