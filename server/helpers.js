
// constant array to hold all alowed image file extensions
const ALLOWED_FILE_EXTENSIONS = [
  'jpg',
  'jpeg',
  'png'
];

const addLeadingZero = (number) => {
  // variable to hold the resulting number as a string
  let zerodNumber = "";

  // return if the value is null or undefined
  if (number === null || number === 'undefined') return;

  // return if the value is not a number
  if (isNaN(number)) return;

  // convert it to an integer
  const value = parseInt(number);

  // if the value is less than 10 add only one leading zero
  if (value < 10) {
    zerodNumber = `00${value}`;
  }

  // if the value is greater than or equal to 10 add two leading zero's
  if (value >= 10 && value < 100) {
    zerodNumber = `0${value}`;
  }

  // if the value is greater than or equal to 100 add no leading zero's but convert it to a string
  if (value >= 100) {
    zerodNumber = `${value}`;
  }

  return zerodNumber;
}

const getFileExtension = (filename) => {
  // return if the value is null or undefined
  if (filename === null || filename === 'undefined') return;
    
  // return if the value is not a string
  if (typeof(filename) !== 'string') return;

  // split the filename E.g: dog.jpg at the '.' into an array E.g: ['dog', 'jpg']
  const parts = filename.split('.');

  // get the second part (the extension) from the parts array to get the extension
  const ext = parts[1];

  return ext;
}

const isAllowedFileExtension = (filename) => {
  // return if the value is null or undefined
  if (filename === null || filename === 'undefined') return;
    
  // return if the value is not a string
  if (typeof(filename) !== 'string') return;

  // get the file extension
  const ext = getFileExtension(filename);

  if (ALLOWED_FILE_EXTENSIONS.includes(ext)) {
    return true;
  }

  return false;
}

module.exports = {
  addLeadingZero,
  getFileExtension,
  isAllowedFileExtension
};