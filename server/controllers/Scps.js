// import scp services
const { findAllSubjects, findOneSubject } = require('../services/Scps');
const { addLeadingZero } = require('../helpers');

const getAllSubjects = async (req, res, next) => {
  // try to get and response with all the subjects
  try {
    const subjects = await findAllSubjects();

    // if the array of subjects is empty send a 404 not found error
    if (subjects.length <= 0) {
      res.status(404).json({error: 'No subjects could be found'});
      return;
    }

    // if all is ok send the data back as json// if all is ok send the data back as json
    res.json(subjects);
  } catch(e) {
    // if we ever have a 500 server error log the error to the console and send an error
    console.log(e.message);
    res.status(500).json({error: 'Could not get all subjects'});
  }
}

const getOneSubject = async (req, res, next) => {
  // get the item value from the request parameters
  const { item } = req.params;

  // if the item value is not a number send a 400 bad request error and return
  if (isNaN(item)) {
    res.status(400).json({error: 'Item parameter must be a number value'});
    return;
  }

  // if the item value is not formatted correctly with leading zero's (if applicable) send a 400 bad request error and return
  /*
  * valid formats are:
  *   - two leading zero's if the value is less than 10: 001-009
  *   - one leading zero if the value is greater than or equal to 10 but less than 100: 010-099
  *   - no two leading zero's if the value is greater than or equal to 100
  */
  if (item !== addLeadingZero(item)) {
    res.status(400).json({error: 'Ttem parameter value must have leading zero\'s (0) if it is below 100. E.g: 001 or 010'});
    return;
  }

  // try to get the requested subject and respond with it
  try {
    const subject = await findOneSubject(item);
    console.log(subject)

    // if the subject is null or undefined send a 404 not found error
    if (subject === null || subject === 'undefined') {
      res.status(404).json({error: 'Subject not found'});
      return;
    }

    // if all is ok send the data back as json
    res.json(subject);
  } catch(e) {
    // if we ever have a 500 server error log the error to the console and send an error
    console.log(e.message);
    res.status(500).json({error: 'Could not get the subject'});
  }
}

module.exports = {
  getAllSubjects,
  getOneSubject
};