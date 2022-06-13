// import dependencies
const path = require('path');

// service to resolve the path to an image
const findImagePath = (filename) => {
  // resolve and return the path to the image media
  const mediaPath = path.resolve(__dirname, '../images', filename);
  return mediaPath;
}

module.exports = {
  findImagePath
};